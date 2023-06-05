//login redirect
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import "./sign-in.styles.scss";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../util/firebase/firebase.ulti";

const SignIn = () => {
  useEffect(() => {
    //async cannot be use useeffect directly,
    // need to create another function within the useeffect
    const signInData = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    };
    signInData();
  }, []);

  const logGoogleUser = async () => {
    //destructure the "reponse" to only get user from the data
    const { user } = await signInWithGooglePopup();
    //pass the user information from createUserDocumentFromAuth in firebase.ulti.js and save it to firestore
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign-in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign-in with google redirect
      </button>
    </div>
  );
};

export default SignIn;
