"use client"
// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Regarde le code existant et sous le Class 'Cat' créé la classe 'Dog'
interface IName {
  name: string
  printName: () => string
}
interface Runnable {
  run: () => void
}
interface Drinkable {
  drink: () => void
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

class Cat extends Animal implements Runnable, Drinkable {
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

// 🐶 Implemente correctement la classe 'Dog'
// ⛏️ Décommente la classe 'dog' ci-dessous et constate le message d'erreur
//class Dog extends Animal implements Runnable, Drinkable {
// 🐶 implétmente correctement dog
//}

// 🐶 Créé une interface 'Swimable' contenant la fonction 'swim()'

// 🐶 adapte la classe Fish en étantdant 'annimal' et implementant 'Swimable'
class Fish {}

const tigrou = new Cat('Tigrou')
tigrou.run()
tigrou.drink()
displayText(`Nom du chat ${tigrou.printName()}`)

// 🐶 Créé une instance de Dog et appelle les fonctions 'run' et 'drink'
// utilise 'displayText' pour afficher son nom à l'écran

// 🐶 Créé une instance de Fish et appelle la fonction 'swim'
// utilise 'displayText' pour afficher son nom à l'écran

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;