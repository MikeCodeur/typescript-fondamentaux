// Les Tuples
// 🚀 Combine avec un Enum
// http://localhost:3000/alone/final/06.bonus-1.js
import displayText, {init} from './helper/exerciseHelper'
init()

enum Protocol {
  HTTP = 'http',
  HTTPS = 'https',
  FTP = 'ftp',
}
type Connexion = [string, Protocol, string, number, string, string]

const google: Connexion = ['Google', Protocol.HTTPS, 'google.com', 80, '', '']
displayText(
  `Connexion ${google[0]} : ${google[1]}://${google[2]}:${google[3]} `,
)

const gmail: Connexion = ['Gmail', Protocol.HTTPS, 'gmail.com', 80, '', '']
displayText(`Connexion ${gmail[0]} : ${gmail[1]}://${gmail[2]}:${gmail[3]} `)

const ftp: Connexion = ['FTP', Protocol.FTP, 'myftp.com', 21, 'admin', 'admin']
displayText(`Connexion ${ftp[0]} : ${ftp[1]}://${ftp[2]}:${ftp[3]} `)

let connexions: Connexion[] = [google, gmail, ftp]

const mike: Connexion = ['FTP', Protocol.HTTPS, 'mikecodeur.com', 443, '', '']
displayText(`Connexion ${mike[0]} : ${mike[1]}://${mike[2]}:${mike[3]} `)
connexions.push(mike)

displayText(`Il y a ${connexions.length} connexions  `)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
