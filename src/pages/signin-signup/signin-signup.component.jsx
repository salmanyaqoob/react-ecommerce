import React from "react";
import "./signin-signup.style.scss";

import Sign from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SigninSignupPage = Props => (
  <div className="signin-signup-page">
    <Sign />
    <SignUp />
  </div>
);

export default SigninSignupPage;
