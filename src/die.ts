import { DIE } from "./die-face";

export class Die {
  face?: DIE

  get isRolled() {
    return this.face != undefined
  }

  get value(): DIE |void {
    return this.face
  }

  roll() {
    
  }
}
