// Les objets
// http://localhost:3000/alone/final/03.ts

import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

let person: {
  name: string
  age: number
  isActive: boolean
  roles: string[]
  params: object
  payload: any
}
//affectation
person = {
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

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;