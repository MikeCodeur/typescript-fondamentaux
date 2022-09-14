// Les types aliases
// 🚀 Récursive Type
// http://localhost:3000/alone/final/04.bonus-1.js

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
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
  friend: Person | undefined
}

const person: Person = {
  name: 'John',
  age: 23,
  isActive: true,
  roles: ['admin'],
  params: {id: '50'},
  payload: undefined,
  friend: undefined,
}

displayText(`${person.name} a pour ami : ${person.friend?.name ?? 'aucun'} `)
