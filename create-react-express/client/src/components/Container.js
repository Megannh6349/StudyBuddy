import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthenticationRoute from "./AuthenticationRoute";
import PrivateRoute from "./PrivateRoute";
import PatronsNavbar from "./PatronsNavbar";
import NonpatronNavbar from "./NonpatronNavbar";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import User from "./User";

class Container extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 320, position: "relative",margin: "0 auto"}}>
            {/* we gave props to authentication route */}
          <AuthenticationRoute
            path="/"
            authComponent={PatronsNavbar}
            unAuthComponent={NonpatronNavbar}
          />
          {/*   routes   */}
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/users/:userId" component={User} />
        </div>
      </Router>
    );
  }
}


export default Container;