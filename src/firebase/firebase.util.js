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

export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exist){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        console.log(`displayName: ${displayName}`);
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error){
            console.log("error while creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
