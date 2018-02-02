/* @internal */
namespace ts.codefix {
    const fixId = "addMissingUndefinedType";
    const errorCodes = [Diagnostics.Property_0_has_no_initializer_and_is_not_definitely_assigned_in_the_constructor.code];
    registerCodeFix({
        errorCodes,
        getCodeActions: (context) => {
            const info = getInfo(context.sourceFile, context.span.start);
            if (!info) return undefined;
            const { token, propertyDeclaration } = info;
            return getActionsForAddMissingUndefinedType(context, token, propertyDeclaration);
        },
        fixIds: [fixId],
        getAllCodeActions: context => {
            const seenNames = createMap<true>();
            return codeFixAll(context, errorCodes, (changes, diag) => {
                const info = getInfo(diag.file!, diag.start!);
                if (!info) return undefined;

                const { token, propertyDeclaration } = info;
                if (!addToSeen(seenNames, token.text)) {
                    return;
                }

                addUndefinedType(changes, diag.file, propertyDeclaration);
            });
        },
    });

    interface Info { token: Identifier; propertyDeclaration: PropertyDeclaration; }
    function getInfo (sourceFile: SourceFile, pos: number): Info | undefined {
        const token = getTokenAtPosition(sourceFile, pos, /*includeJsDocComment*/ false);
        if (!isIdentifier(token)) {
            return undefined;
        }

        const propertyDeclaration = token.parent;
        if (!isPropertyDeclaration(propertyDeclaration)) {
            return undefined;
        }

        return { token, propertyDeclaration };
    }

    function getActionsForAddMissingUndefinedType (context: CodeFixContext, token: Identifier, propertyDeclaration: PropertyDeclaration): CodeFixAction[] | undefined {
        const description = formatStringFromArgs(getLocaleSpecificMessage(Diagnostics.Declare_property_0), [token.text]);
        const changes = textChanges.ChangeTracker.with(context, t => addUndefinedType(t, context.sourceFile, propertyDeclaration));
        const action = { description, changes, fixId };
        return [ action ];
    }

    function addUndefinedType(changeTracker: textChanges.ChangeTracker, propertyDeclarationSourceFile: SourceFile, propertyDeclaration: PropertyDeclaration): void {
        const newTypeNode = createUnionTypeNode([propertyDeclaration.type, createKeywordTypeNode(SyntaxKind.UndefinedKeyword)]);
        changeTracker.replaceNode(propertyDeclarationSourceFile, propertyDeclaration.type, newTypeNode);
    }
}
