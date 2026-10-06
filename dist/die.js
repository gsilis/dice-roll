"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Die = void 0;
const random_1 = require("./random");
const FACES = [1, 2, 3, 4, 5, 6];
class Die {
    get isRolled() {
        return this.face != undefined;
    }
    get value() {
        return this.face;
    }
    roll() {
        this.face = (0, random_1.sample)(FACES);
    }
}
exports.Die = Die;
