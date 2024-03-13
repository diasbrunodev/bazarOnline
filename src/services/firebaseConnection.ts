import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDShU9PTcdSrGfbk6EhZlXUQMfD_aRRxgU',
  authDomain: 'bazaronline-f7e40.firebaseapp.com',
  projectId: 'bazaronline-f7e40',
  storageBucket: 'bazaronline-f7e40.appspot.com',
  messagingSenderId: '112924699489',
  appId: '1:112924699489:web:a701eef229b6f13be23320',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }
