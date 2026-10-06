# Dice Roll

Ok, this might not be a super-necessary package, but it's kind of exercise with managing packages.

## Usage

```
import { Roller } from 'dice-roll'

const hand = new Roller(2)
hand.roll()

console.log(`You rolled a ${hand.faces} totaling ${hand.value}!`)
```