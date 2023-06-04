import "./sign-in.styles.scss";
import { signInWithGooglePopup } from "../../util/firebase/firebase.ulti";
import { createUserDocumentFromAuth } from "../../util/firebase/firebase.ulti";

const SignIn = () => {
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
    </div>
  );
};

export default SignIn;
