import React from "react";
import { NavLink } from "react-router-dom";

const NonpatronNavbar = () => (
  <div style={{display: "flex"}}>
    <NavLink to="/" exact activeStyle={{ color: "red" }} style={{flexGrow: 4}}>
      Home
    </NavLink>
    <NavLink
      to="/signup"
      activeStyle={{ color: "red" }}
      style={{flexGrow: 1}}
    >
      Signup
    </NavLink>
    <NavLink
      to="/signin"
      activeStyle={{ color: "red" }}
      style={{flexGrow: 1}}
    >
      Signin
    </NavLink>
  </div>
);


export default NonpatronNavbar;