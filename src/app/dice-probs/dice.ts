export class Dice {
    constructor(
        public sides: Side[]
    ) {}
}

export class Side {
    constructor(
        public symbol: Symbol,
        public value: number,
        public cost: number,
        public modifier: boolean
    ) {}
}

export enum Symbol {
    Melee = 'MELEE',
    Ranged = 'RANGED',
    Indirect = 'INDIRECT',
    Shield = 'SHIELD',
    Disrupt = 'DISRUPT',
    Discard = 'DISCARD',
    Resource = 'RESOURCE',
    Focus = 'FOCUS',
    Special = 'SPECIAL',
    Blank = 'BLANK',
    NoSymbol = 'NO SYMBOL'
}

export class Pool {
    constructor(
        public sides: Side[]
    ) {}
}
