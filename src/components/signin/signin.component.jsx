import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/from-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.action";

import "./signin.style.scss";

const Signin = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
    setUserCredentials({ email: "", password: "" });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an Account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          required
          value={email}
          label="Email"
          onChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          required
          value={password}
          label="password"
          onChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit" value="Login Now" />
          <CustomButton
            type="button"
            loginWithGoogle="true"
            value="Sign in with Google"
            onClick={googleSignInStart}
          />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(Signin);
