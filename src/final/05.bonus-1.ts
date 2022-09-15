// Les Enum
// 🚀 Auto-increment
// http://localhost:3000/alone/final/05.bonus-1.js

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

type Civility = 'Mr' | 'Mme' | 'Mlle'
let civility: Civility
civility = 'Mr'
displayText(`Bonjour ${civility}`)

type maxUploadSize = 2048 | 4096
let uploadSize: maxUploadSize
uploadSize = 2048
displayText(`Upload size : ${uploadSize}`)

enum HttpStatusCode {
  CONTINUE = 100,
  OK = 200,
  MOVED_PERMANENTLY = 301,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
let httpResponse: HttpStatusCode = HttpStatusCode.BAD_REQUEST
displayText(`Reponse du serveur ${httpResponse}`)

enum TransfertMessage {
  OK = 'Transfert avec succès',
  KO = 'Erreur durant le transfert',
  RETRY = 'Recommencez le transfert',
}
let message: TransfertMessage = TransfertMessage.OK
displayText(`Message :  ${message}`)

enum Note {
  STAR1 = 1,
  STAR2,
  STAR3,
  STAR4,
  STAR5,
}
let review: Note
review = Note.STAR3
displayText(`Note :  ${review}`)
