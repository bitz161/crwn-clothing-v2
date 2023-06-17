import { useState } from "react";
import "./sign-in-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.ulti";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();
    } catch (error) {}
  };
  const handleChange = (event) => {
    //name of the input and value is the current value of input
    const { name, value } = event.target;
    //used spread to update which name or object should be update it's value
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(event) => handleSubmit(event)}>
        {/* use name to identify which input is active */}
        <FormInput
          label="Email"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
};

export default SignInForm;
