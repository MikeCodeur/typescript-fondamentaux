// Les interfaces
// 🚀 Extending a type via intersections
// http://localhost:3000/alone/exercise/09.bonus-1.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

interface IName {
  name: string
  printName: () => string
}

type Mammal = Runnable & Drinkable

interface Runnable {
  run: () => void
}
interface Drinkable {
  drink: () => void
}

interface Swimable {
  swim: () => void
}

class Animal implements IName {
  // name: string | undefined
  nbLeg: number
  underwater: boolean
  constructor(name: string, nbLeg: number, underwater: boolean) {
    this.name = name
    this.nbLeg = nbLeg
    this.underwater = underwater
  }
  name: string
  printName() {
    console.log(`Mon nom est ${this.name}`)
    return this.name
  }
}

class Cat extends Animal implements Mammal {
  constructor(name: string) {
    super(name, 4, false)
  }
  run() {
    console.log(`Je cours`)
  }
  drink() {
    console.log(`Je bois`)
  }
}

class Dog extends Animal implements Mammal {
  constructor(name: string) {
    super(name, 4, false)
  }
  run() {
    console.log(`Je cours`)
  }
  drink() {
    console.log(`Je bois`)
  }
}

class Fish extends Animal implements Swimable {
  constructor(name: string) {
    super(name, 4, false)
  }
  swim() {
    console.log(`Je nage`)
  }
}

const tigrou = new Cat('Tigrou')
tigrou.run()
tigrou.drink()
displayText(`Nom du chat ${tigrou.printName()}`)

const mowgli = new Dog('Mowgli')
mowgli.run()
mowgli.drink()
displayText(`Nom du chien ${mowgli.printName()}`)

const nemo = new Fish('Nemo')
nemo.swim()
displayText(`Nom du poisson ${nemo.printName()}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
