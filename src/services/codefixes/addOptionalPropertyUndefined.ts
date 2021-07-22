/* @internal */
namespace ts.codefix {
    const addOptionalPropertyUndefined = "addOptionalPropertyUndefined";

    const errorCodes = [
        Diagnostics.Type_0_is_not_assignable_to_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_types_of_the_target_s_properties.code,
        Diagnostics.Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_types_of_the_target_s_properties.code
    ];

    registerCodeFix({
        errorCodes,
        getCodeActions(context) {
            const typeChecker = context.program.getTypeChecker();
            const toAdd = getPropertiesToAdd(context.sourceFile, context.span.start, typeChecker);
            if (!toAdd.length) {
                return undefined;
            }
            const changes = textChanges.ChangeTracker.with(context, t => addUndefinedToOptionalProperty(t, toAdd));
            return [createCodeFixAction(addOptionalPropertyUndefined, changes, Diagnostics.Add_undefined_to_optional_property_type, addOptionalPropertyUndefined, Diagnostics.Add_undefined_to_all_optional_properties)];
        },
        fixIds: [addOptionalPropertyUndefined],
        getAllCodeActions: context => {
            const { program } = context;
            const checker = program.getTypeChecker();
            const seen = new Map<string, true>();
            return createCombinedCodeActions(textChanges.ChangeTracker.with(context, changes => {
                eachDiagnostic(context, errorCodes, diag => {
                    const toAdd = getPropertiesToAdd(diag.file, diag.start, checker);
                    if (!toAdd.length) {
                        return;
                    }
                    let untouched = true;
                    for (const add of toAdd) {
                        if (!addToSeen(seen, add.id + "")) {
                            untouched = false;
                        }
                    }
                    if (untouched) {addUndefinedToOptionalProperty(changes, toAdd);}
                });
            }));
        },
    });

    function getPropertiesToAdd(file: SourceFile, pos: number, checker: TypeChecker): Symbol[] {
        const sourceTarget = getSourceTarget(getErrorNode(file, pos), checker);
        if (!sourceTarget) {
            return [];
        }
        const { source: sourceNode, target: targetNode } = sourceTarget;
        const target = checker.getTypeAtLocation(targetNode);
        if (target.symbol?.declarations?.some(d => getSourceFileOfNode(d).fileName.match(/\.d\.ts$/))) {
            return [];
        }
        return checker.getExactOptionalUnassignableProperties(checker.getTypeAtLocation(sourceNode), target);
    }

    /**
     * Get the part of the incorrect assignment that is useful for type-checking
     * eg
     * this.definite = 1; ---> `this.definite`
     * ^^^^
     * definite = source  ----> `definite`
     * ^^^^^^^^
     */
    function getErrorNode(file: SourceFile, pos: number): MemberName | PropertyAccessExpression | undefined {
        const start = getTokenAtPosition(file, pos);
        return isPropertyAccessExpression(start.parent) && start.parent.expression === start ? start.parent
            : isIdentifier(start) || isPrivateIdentifier(start) ? start
            : undefined;
    }

    /**
     * Find the source and target of the incorrect assignment.
     * The call is recursive for property assignments.
     */
    function getSourceTarget(errorNode: Node | undefined, checker: TypeChecker): { source: Node, target: Node } | undefined {
        if (!errorNode) {
            return undefined;
        }
        else if (isBinaryExpression(errorNode.parent) && errorNode.parent.operatorToken.kind === SyntaxKind.EqualsToken) {
            return { source: errorNode.parent.right, target: errorNode.parent.left };
        }
        else if (isVariableDeclaration(errorNode.parent) && errorNode.parent.initializer) {
            return { source: errorNode.parent.initializer, target: errorNode.parent.name };
        }
        else if (isCallExpression(errorNode.parent)) {
            const n = checker.getSymbolAtLocation(errorNode.parent.expression);
            if (!n?.valueDeclaration) return undefined;
            if (!isExpression(errorNode)) return undefined;
            const i = errorNode.parent.arguments.indexOf(errorNode);
            const name = (n.valueDeclaration as any as SignatureDeclaration).parameters[i].name;
            if (isIdentifier(name)) return { source: errorNode, target: name };
        }
        else if (isPropertyAssignment(errorNode.parent) && isIdentifier(errorNode.parent.name) ||
            isShorthandPropertyAssignment(errorNode.parent)) {
            const parentTarget = getSourceTarget(errorNode.parent.parent, checker);
            if (!parentTarget) return undefined;
            const prop = checker.getPropertyOfType(checker.getTypeAtLocation(parentTarget.target), (errorNode.parent.name as Identifier).text);
            const declaration = prop?.declarations?.[0];
            if (!declaration) return undefined;
            return {
                source: isPropertyAssignment(errorNode.parent) ? errorNode.parent.initializer : errorNode.parent.name,
                target: declaration
            };
        }
        return undefined;
    }

    function addUndefinedToOptionalProperty(changes: textChanges.ChangeTracker, toAdd: Symbol[]) {
        for (const add of toAdd) {
            const d = add.valueDeclaration;
            if (d && (isPropertySignature(d) || isPropertyDeclaration(d)) && d.type) {
                const t = factory.createUnionTypeNode([
                    ...d.type.kind === SyntaxKind.UnionType ? (d.type as UnionTypeNode).types : [d.type],
                    factory.createTypeReferenceNode("undefined")
                ]);
                changes.replaceNode(d.getSourceFile(), d.type, t);
            }
        }
    }
}
