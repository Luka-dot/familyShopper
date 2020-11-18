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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;