import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { GlobleStyles } from "./globle.style";

//Pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SigninSignupPage from "./pages/signin-signup/signin-signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    return () => {
      checkUserSession();
    };
  }, [checkUserSession]);

  return (
    <div>
      <GlobleStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SigninSignupPage />
          }
        ></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
