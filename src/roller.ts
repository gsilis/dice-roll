import { Die } from "./die";
import { DIE } from "./die-face";

export class Roller {
  dice: Die[] = []

  constructor(dieCount = 1) {
    for (let i = 0; i < dieCount; i++) {
      this.dice.push(new Die())
    }
  }

  roll() {
    this.dice.forEach(d => d.roll())
  }

  values(): (DIE | void)[] {
    return this.dice.map(d => d.value)
  }

  sum(): number {
    return this.dice.reduce((acc, die) => {
      if (die.isRolled && die.value) {
        return acc + die.value
      }

      return acc
    }, 0)
  }

  avarage(): number | void {
    const count = this.dice.length
    const sum = this.sum()

    return Math.max(sum / count)
  }

  min(): number | void {
    return this.dice.reduce((acc, die): (number | void) => {
      if (acc && die.value && die.value < acc) {
        return die.value
      }

      return acc
    }, undefined)
  }

  max(): number | void {
    return this.dice.reduce((acc, die): (number | void) => {
      if (acc && die.value && die.value > acc) {
        return die.value
      }

      return acc
    }, undefined)
  }
}