import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-up.style.scss";

import FormInput from "../../components/from-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUpStart }) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password and confirm password is not matching");
      return;
    }

    try {
      signUpStart(email, password, displayName);
      //     const { user } = await auth.createUserWithEmailAndPassword(
      //     email,
      //     password
      //   );

      //   await createUserProfileDocument(user, displayName);
      setUserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an Account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          required
          value={displayName}
          label="Name"
          onChange={handleChange}
        />

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

        <FormInput
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          label="confirm Password"
          onChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit" value="Sign up" />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
