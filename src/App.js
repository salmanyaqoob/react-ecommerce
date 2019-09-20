import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninSignupPage from './pages/signin-signup/signin-signup.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.util';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>      
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SigninSignupPage}></Route>
          <Route exact path="/shop/hats" component={HatsPage}></Route>
        </Switch>
      </div>
      
    );
  }
  
}

export default App;
