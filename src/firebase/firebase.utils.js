import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDo627IsT7ippP7mnm0WropzH1kB5H6PTs",
    authDomain: "family-shopper-bd86c.firebaseapp.com",
    databaseURL: "https://family-shopper-bd86c.firebaseio.com",
    projectId: "family-shopper-bd86c",
    storageBucket: "family-shopper-bd86c.appspot.com",
    messagingSenderId: "150645926427",
    appId: "1:150645926427:web:533bd1b560da47f7e026be",
    measurementId: "G-2CJ5K034X3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;  

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;