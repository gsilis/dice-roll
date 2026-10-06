import { DIE } from "./die-face";
import { sample } from "./random";

const FACES: DIE[] = [1, 2, 3, 4, 5, 6]

export class Die {
  face?: DIE

  get isRolled() {
    return this.face != undefined
  }

  get value(): DIE |void {
    return this.face
  }

  roll() {
    this.face = sample(FACES)
  }
}
