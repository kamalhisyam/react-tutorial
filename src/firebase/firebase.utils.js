import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAODY1C7Drf1XNnCKPCu_sfeECuGnD8Cto",
    authDomain: "react-tutorial-734df.firebaseapp.com",
    databaseURL: "https://react-tutorial-734df.firebaseio.com",
    projectId: "react-tutorial-734df",
    storageBucket: "react-tutorial-734df.appspot.com",
    messagingSenderId: "1066147907850",
    appId: "1:1066147907850:web:c4c4f70c84f53e290bd2f3",
    measurementId: "G-GY7WGL3YZJ"
  };




  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    try {
        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            userRef.set({
                displayName,
                email,
                ...additionalData
            });
        }
    } catch (err) {
        console.log('Error creating profile');
    }

    return userRef;
}

  export default firebase;