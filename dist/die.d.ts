import { DIE } from "./die-face";
export declare class Die {
    face?: DIE;
    get isRolled(): boolean;
    get value(): DIE | void;
    roll(): void;
}
