/* @internal */
namespace ts.refactor.addTypeAnnotation {
    const refactorName = "Add type annotation";
    const refactorDescription = Diagnostics.Add_type_annotation.message;

    const addTypeAnotationAction = {
        name: refactorName,
        description: refactorDescription,
        kind: "refactor.rewrite.addTypeAnnotation"
    };
    registerRefactor(refactorName, {
        kinds: [addTypeAnotationAction.kind],
        getEditsForAction,
        getAvailableActions
    });

    function getEditsForAction(context: RefactorContext): RefactorEditInfo | undefined {
        const info = getInfo(context);
        if (info && !isRefactorErrorInfo(info)) {
            const edits = textChanges.ChangeTracker.with(context, t => doChange(t, context, info));
            return { renameFilename: undefined, renameLocation: undefined, edits };
        }
        return undefined;
    }

    function getAvailableActions(context: RefactorContext): readonly ApplicableRefactorInfo[] {
        const info = getInfo(context);
        if (!info) return emptyArray;
        if (!isRefactorErrorInfo(info)) {
            return [{
                name: refactorName,
                description: refactorDescription,
                actions: [addTypeAnotationAction]
            }];
        }
        if (context.preferences.provideRefactorNotApplicableReason) {
            return [{
                name: refactorName,
                description: refactorDescription,
                actions: [{ ...addTypeAnotationAction, notApplicableReason: info.error }]
            }];
        }
        return emptyArray;
    }

    type AnnotatableDeclaration = VariableDeclaration | ParameterDeclaration | PropertyDeclaration;

    interface Info {
        declaration: AnnotatableDeclaration;
        type: Type;
    }

    function doChange(changes: textChanges.ChangeTracker, context: RefactorContext, info: Info) {
        const checker = context.program.getTypeChecker();
        const scriptTarget = getEmitScriptTarget(context.program.getCompilerOptions());
        const importAdder = codefix.createImportAdder(context.file, context.program, context.preferences, context.host);
        const typeNode = codefix.typeToAutoImportableTypeNode(checker, importAdder, info.type, info.declaration, scriptTarget, NodeBuilderFlags.NoTruncation) ||
            checker.typeToTypeNode(checker.getAnyType(), /*enclosingDeclaration*/ undefined, /*flags*/ undefined);
        changes.insertNodeAt(context.file, info.declaration.name.end, typeNode!, { prefix: ": " });
        importAdder.writeFixes(changes);
    }

    function getInfo(context: RefactorContext): Info | RefactorErrorInfo | undefined {
        if (isInJSFile(context.file) || !refactorKindBeginsWith(addTypeAnotationAction.kind, context.kind)) return;
        const token = getTokenAtPosition(context.file, context.startPosition);
        const checker = context.program.getTypeChecker();

        const parent = tryGetAnnotatableDeclaration(token);
        if (parent === undefined || parent.initializer === undefined) {
            return { error: getLocaleSpecificMessage(Diagnostics.A_type_must_be_inferred_from_annotatable_declaration_with_an_initializer) };
        }
        return { type: checker.getTypeAtLocation(isBindingPattern(parent.name) ? parent.initializer : parent), declaration: parent };
    }

    function tryGetAnnotatableDeclaration(node: Node) {
        return findAncestor(node, n => {
            switch (n.kind) {
                case SyntaxKind.VariableDeclaration:
                case SyntaxKind.PropertyDeclaration:
                case SyntaxKind.Parameter:
                    return !(n as AnnotatableDeclaration).type ? true : "quit";
                default:
                    return false;
            }
        }) as AnnotatableDeclaration | undefined;
    }
}
