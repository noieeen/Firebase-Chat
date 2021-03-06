import { auth } from '../services/firebase.config'


export function signup(email,password){
  return auth().createUserWithEmailAndPassword(email, password);
}
export function signin(email,password){
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle(){
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}
