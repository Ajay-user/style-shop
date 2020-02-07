import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header.component.jsx";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth } from "../src/firebase/firebase.util";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
