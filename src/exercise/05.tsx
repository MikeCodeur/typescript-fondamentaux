// Les types alias
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Déclare une variable `civility` et un type `Civility` avec comme valeur possible 'Mr' 'Mme' 'Mlle'
// 📝 documentation Literal types https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
// avec displayText affiche 'Bonjour Mr' en utilisant civility

// 🐶 Déclare une variable `uploadSize` et un type `maxUploadSize` avec comme valeur possible 2048 ou 4096
// avec displayText affiche 'Upload size 2048' en utilisant uploadSize

// 🐶 Déclare un Enum  `HttpStatusCode` et code toutes les valeurs demandées par 👨‍✈️ Hugo
// 📝 documentation declaration Enum https://www.typescriptlang.org/docs/handbook/enums.html
// Créér une variable `httpResponse` et initialise la avec la valeur '400' sans utliser de Magic String
// avec displayText affiche 'Reponse du serveur 400' en utilisant httpResponse

// 🐶 Déclare un Enum  `TransfertMessage` et code toutes les valeurs demandées par 👨‍✈️ Hugo
// Créér une variable `message` et initialise la avec la valeur 'Transfert avec succès' sans utliser de Magic String
// avec displayText affiche 'Message : Transfert avec succès' en utilisant `message`

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;