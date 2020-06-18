import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID,
    databaseUR: process.env.FIREBASE_DATABASE_URL
  })
}

const firestore = firebase.firestore()
export { firestore }
