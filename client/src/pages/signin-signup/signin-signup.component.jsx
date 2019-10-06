import React from "react";
import { Helmet } from "react-helmet";

import Sign from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInSignUpPageContainer } from "./signin-signup.style";

const SigninSignupPage = Props => (
  <div>
    <Helmet>
      <title>Signin and Signup</title>
      <meta
        name="description"
        content="Signin and Signup page Crown Clothing"
      />
    </Helmet>
    <SignInSignUpPageContainer>
      <Sign />
      <SignUp />
    </SignInSignUpPageContainer>
  </div>
);

export default SigninSignupPage;
