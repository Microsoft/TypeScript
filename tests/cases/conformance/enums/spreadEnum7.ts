// @declaration: true

enum R1 {
    ...LiteralEnum1,
    R1 = 'R1'
}

enum LiteralEnum1 {
    A,
    B
}

enum R2 {
    ...R3,
    R2 = 'R2'
}

enum R3 {
    ...R2,
    R3 = 'R3'
}

enum R4 {
    ...LiteralEnum1,
    R4 = 'R4'
}

enum R5 {
    ...LiteralEnum1,
    R5 = 'R5'
}

enum R6 {
    ...LiteralEnum1,
    ...R4,
    ...R5,
    R6 = 'R6'
}

enum R66 {
    A,
    B,
    ...LiteralEnum1,
}

enum PartEnum1 {
    A = 'A'
}

enum RefEnum1 {
    ...PartEnum1,
    R = 'R'
}

enum PartEnum1 {
    B = 'B'
}

enum R7 {
    B = 'B',
    ...LiteralEnum1,
    A = 'A'
}

enum R8 {
    ...R8,
    R88 = 'R88'
}

enum R9 {
    ...R9,
    R9 = 'R9'
}
