import { useState } from "react";
import "./sign-up-form.styles.scss";
import { createUserDocumentFromAuth } from "../../util/firebase/firebase.ulti";

const SignUpForm = () => {
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;
    const userDocRef = await createUserDocumentFromAuth(email, password);
  };
  //TODO:create a createuserdocumentfromemailandpassword function in firebase utils

  const handleChange = (event) => {
    //name of the input and value is the current value of input
    const { name, value } = event.target;
    //used spread to update which name or object should be update it's value
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form
        onSubmit={(event) => {
          handleSubmit();
        }}
      >
        {/* use name to identify which input is active */}
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
