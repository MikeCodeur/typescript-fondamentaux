// Les fonctions
// 🚀 Call Signatures
// http://localhost:3000/alone/exercise/08.bonus-1.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
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

type CalculExpFunction = {
  description: string
  (arg: number): number
}

function calculExp(cb: CalculExpFunction, base: number): number {
  return cb(base)
}
function carre(a: number) {
  return a * a
}
carre.description = 'Fonction au carré'

function cube(a: number) {
  return a * a * a
}
cube.description = 'Fonction au cube'

displayText(`5 au carré ${calculExp(carre, 5)}`)
displayText(`5 au cube ${calculExp(cube, 5)}`)
};
export default () => <App exercice={exercice} />;