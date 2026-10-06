import { Die } from "./die";
import { DIE } from "./die-face";
export declare class Roller {
    dice: Die[];
    constructor(dieCount?: number);
    get faces(): (void | DIE)[];
    get value(): number;
    roll(): void;
    values(): (DIE | void)[];
    sum(): number;
    avarage(): number | void;
    min(): number | void;
    max(): number | void;
}
