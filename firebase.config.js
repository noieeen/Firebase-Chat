import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBd-Z_mrnSpttSkp6YJ-tXeh_r9Co1oHTk",
  authDomain: "chatapp-next-61c14.firebaseapp.com",
  databaseURL: "https://chatapp-next-61c14-default-rtdb.firebaseio.com",
  projectId: "chatapp-next-61c14",
  storageBucket: "chatapp-next-61c14.appspot.com",
  messagingSenderId: "99350910541",
  appId: "1:99350910541:web:815eee4b2bc2630dcd6e04",
  measurementId: "G-Z7G2ME58WS"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const database = firebase.database();
const fire = firebase;
export default firebase
