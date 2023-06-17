import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

//Firestore
//initialize access from firestore
export const db = getFirestore();

//Store logins from firestore from the authentication
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error create the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  //if query means !email is empty or !password is empty = return or end the function
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  //if query means !email is empty or !password is empty = return or end the function
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
