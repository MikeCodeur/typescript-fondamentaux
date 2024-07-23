"use client"
// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

function sayHello(name: string) {
  return `Hello ${name}`
}

function sum(a: number, b: number) {
  return a + b
}

function printGender(isMale: boolean) {
  return isMale ? 'Monsieur' : 'Madame'
}

displayText(`${sayHello('Mike')}`)
displayText(`La somme de 2 et 3 vaut ${sum(2, 3)}`)
displayText(`Bonjour ${printGender(true)}`)
displayText(`Bonjour ${printGender(false)}`)
};
export default () => <App exercice={exercice} />;