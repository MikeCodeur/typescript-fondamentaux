// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

let doSomeThing: Function

doSomeThing = () => {
  displayText(`Hello developpeur`)
}
doSomeThing()

doSomeThing = (name: string) => {
  displayText(`Hello ${name}`)
}
doSomeThing('John')

function sum(a: number, b: number): number {
  return a + b
}
displayText(`La somme de 2 et 3 donne ${sum(2, 3)}`)
