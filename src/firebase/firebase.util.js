import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbBGcoDvXVNpmW7ODBMpduTJVM2dUchPA",
    authDomain: "react-ecommerce-7b670.firebaseapp.com",
    databaseURL: "https://react-ecommerce-7b670.firebaseio.com",
    projectId: "react-ecommerce-7b670",
    storageBucket: "",
    messagingSenderId: "429889708997",
    appId: "1:429889708997:web:24b3ecaac363d211f361ac"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
