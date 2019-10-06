import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { GlobleStyles } from "./globle.style";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";

//Pages
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SigninSignupPage = lazy(() =>
  import("./pages/signin-signup/signin-signup.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const ContactusPage = lazy(() =>
  import("./pages/contactus/contactus.component")
);

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
            <Route exact path="/contact" component={ContactusPage}></Route>
          </Suspense>
        </ErrorBoundary>
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
