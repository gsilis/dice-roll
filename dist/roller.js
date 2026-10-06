"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roller = void 0;
const die_1 = require("./die");
class Roller {
    constructor(dieCount = 1) {
        this.dice = [];
        for (let i = 0; i < dieCount; i++) {
            this.dice.push(new die_1.Die());
        }
    }
    get faces() {
        return this.values();
    }
    get value() {
        return this.sum();
    }
    roll() {
        this.dice.forEach(d => d.roll());
    }
    values() {
        return this.dice.map(d => d.value);
    }
    sum() {
        return this.dice.reduce((acc, die) => {
            if (die.isRolled && die.value) {
                return acc + die.value;
            }
            return acc;
        }, 0);
    }
    avarage() {
        const count = this.dice.length;
        const sum = this.sum();
        return Math.max(sum / count);
    }
    min() {
        return this.dice.reduce((acc, die) => {
            if (acc && die.value && die.value < acc) {
                return die.value;
            }
            return acc;
        }, undefined);
    }
    max() {
        return this.dice.reduce((acc, die) => {
            if (acc && die.value && die.value > acc) {
                return die.value;
            }
            return acc;
        }, undefined);
    }
}
exports.Roller = Roller;
