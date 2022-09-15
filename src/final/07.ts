// Les opérateurs & Cast de types
// http://localhost:3000/alone/exercise/07.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

type car = {
  name: string
  maxSpeed?: number
  mass?: number
}

function kineticEnergy(speed: number, mass?: number) {
  return mass ? {result: 0.5 * mass * Math.sqrt(speed)} : null
}

let tesla: car
tesla = {name: 'tesla', mass: 1850, maxSpeed: 78}

let teslaEnergie
teslaEnergie = kineticEnergy(tesla.maxSpeed!, tesla.mass)!
displayText(
  `energie cinetique de ${tesla.name} est ${teslaEnergie.result} joules`,
)

let unknowCarSpeed: unknown = 150
let unknowCarMass: unknown = 2000

let unknowCarEnergie
unknowCarEnergie = kineticEnergy(
  unknowCarSpeed as number,
  unknowCarMass as number,
)!
displayText(`energie cinetique est ${unknowCarEnergie.result} joules`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
/*eslint
  @typescript-eslint/consistent-type-assertions : 'off'
*/
