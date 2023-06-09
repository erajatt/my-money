import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCLrmV0szXuYqcf4lH0-RLOxJBoL4CmVH4",
  authDomain: "mymoney-9f209.firebaseapp.com",
  projectId: "mymoney-9f209",
  storageBucket: "mymoney-9f209.appspot.com",
  messagingSenderId: "517509124654",
  appId: "1:517509124654:web:0e58501e1127c8469cc5bf"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
