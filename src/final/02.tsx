// Les tableaux
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

let names: string[]
names = ['John', 'doe']

displayText(`il y a ${names.length} noms`)

const games: string[] = []
games.push('Call of')
games.push('FIFA')
games.push('Assasin creed')

displayText(`il y a ${games.length} jeux`)

let things: any[] = []
things.push('Call of')
things.push(true)
things.push({name: 'John'})
things.push([1])

displayText(`il y a ${things.length} choses`)
};
export default () => <App exercice={exercice} />;