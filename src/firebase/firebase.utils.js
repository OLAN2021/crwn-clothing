import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyADapIBH2Rmo1SNyf6hm5wNfg0RxglaPa0",
    authDomain: "crwn-db-76625.firebaseapp.com",
    projectId: "crwn-db-76625",
    storageBucket: "crwn-db-76625.appspot.com",
    messagingSenderId: "91778860103",
    appId: "1:91778860103:web:b90a7fdec12958f9bedd62",
    measurementId: "G-QB8XB4RDP5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;