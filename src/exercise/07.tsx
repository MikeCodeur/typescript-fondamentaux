"use client"
// Les opérateurs & Cast de types
// http://localhost:3000/alone/exercise/07.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Modifile le type `car` avec toutes les propriétés demandée par 👨‍✈️ Hugo
type car = any
// 🐶 Complete la fonction `kineticEnergy` avec toutes les propriétés demandée par 👨‍✈️ Hugo
// Fonction prenant en entrée 2 parametre
// - speed un nombre obligatoire
// - mass un nombre optionel
function kineticEnergy() {
  // calcul l'energie avec cette formule
  // Energie (en Joule) = 0.5 x masse x vitesse ²
  // utile Math pour le calcul au carré
  // 📝 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
  //
  // ⛏️ décommente la ligne ci-dessous et met la formule dans result
  // il s'agit d'une ternaire qui permet de retouner soit 'null' si 'mass' est 'null', soit un 'objet' avec la propriété 'result'
  //return mass ? {result: _____ } : null
}

let tesla: car
tesla = {name: 'tesla', mass: 1850, maxSpeed: 78}

let teslaEnergie
// ⛏️ décommente la ligne ci-dessous et appelle correctement la fonction 'kineticEnergy' avec 'tesla'
// teslaEnergie = kineticEnergy(.....)
displayText()
// ⛏️ décommente sans modifier
//`energie cinetique de ${tesla.name} est ${teslaEnergie.result} joules`,

// 🐶 le type unknown permet de dire qu'on ne sait pas ce que contiendra la variable
// nous les utiliseront ici pour pouvoir tester cast de type
let unknowCarSpeed: unknown = 150
let unknowCarMass: unknown = 2000

// ⛏️ décommente la ligne ci-dessous et appelle correctement la fonction 'kineticEnergy' avec 'unknowCarSpeed' et 'unknowCarMass'
// unknowCarEnergie = kineticEnergy(.....)
let unknowCarEnergie

// ⛏️ décommente la ligne ci-dessous
// displayText(
//   `energie cinetique est ${unknowCarEnergie.result} joules`
//   )

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
/*eslint
  @typescript-eslint/consistent-type-assertions : 'off'
*/
};
export default () => <App exercice={exercice} />;