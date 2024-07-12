// Les types aliases
// http://localhost:3000/alone/final/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper";  
const exercice = () => {
init()

type pinType = number | string
let pin: pinType
pin = 0
displayText(`Le pin est ${pin}`)
pin = '10'
displayText(`Le pin est ${pin}`)

type primitives = number | boolean | string
let prim: primitives = 'Mike'
displayText(`prim vaut  ${prim}`)

type primitivesNullUndefined = number | boolean | string | null | undefined
let prim2: primitivesNullUndefined
displayText(`prim2 vaut  ${prim2}`)

type Person = {
  name: string
  age: number
  isActive: boolean
  roles: string[]
  params: object
  payload: any
}

const person: Person = {
  name: 'John',
  age: 23,
  isActive: true,
  roles: ['admin'],
  params: {id: '50'},
  payload: undefined,
}

displayText(
  `${person.name} a ${person.age} ans et a le role ${person.roles[0]} `,
)
};
export default () => <App exercice={exercice} />;