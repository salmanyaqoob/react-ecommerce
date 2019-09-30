import React from "react";

import Sign from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInSignUpPageContainer } from "./signin-signup.style";

const SigninSignupPage = Props => (
  <SignInSignUpPageContainer>
    <Sign />
    <SignUp />
  </SignInSignUpPageContainer>
);

export default SigninSignupPage;
