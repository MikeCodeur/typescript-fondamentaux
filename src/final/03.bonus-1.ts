// Les objets
// 🚀 Imbrication de types
// http://localhost:3000/alone/final/03.bonus-1.js

import displayText, {init} from './helper/exerciseHelper'
init()

let person: {
  name: string
  age: number
  isActive: boolean
  roles: string[]
  params: object
  payload: any
  friend: {
    name: string
    age: number
    isActive: boolean
    roles: string[]
    params: object
    payload: any
  }
}
//affectation
person = {
  name: 'John',
  age: 23,
  isActive: true,
  roles: ['admin'],
  params: {id: '50'},
  payload: undefined,
  friend: {
    name: 'Mike',
    age: 33,
    isActive: true,
    roles: ['guest'],
    params: {id: '53'},
    payload: undefined,
  },
}

displayText(`${person.name} a pour ami ${person.friend.name} `)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
