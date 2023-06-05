import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//Firestore Database
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuuPmNjOZ7YU36iJOO9vKGaY5H8_KeljQ",
  authDomain: "crwn-clothing-v2-db-c74e9.firebaseapp.com",
  projectId: "crwn-clothing-v2-db-c74e9",
  storageBucket: "crwn-clothing-v2-db-c74e9.appspot.com",
  messagingSenderId: "728369493757",
  appId: "1:728369493757:web:09bbd8f6b7e3d39bb6f094",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

//for google auth provider
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//sign-in using google poup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
//sign-in redirect
export const signInWithGoogleRedirect = () =>
  signInWithGoogleRedirect(auth, googleProvider);
//TODO:need to fix error

//Firestore
//initialize access from firestore
export const db = getFirestore();

//Store logins from firestore from the authentication
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  //.exists to identify if user or data exist to the database
  console.log(userSnapshot.exists());

  //user does not exists query
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //setDoc is save the data to the database
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error create the user", error.message);
    }
  }

  return userDocRef;
};
