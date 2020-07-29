import React from "react";
import { NavLink } from "react-router-dom";
import { removeToken } from "../tokens";

const PatronsNavbar = ({ history, authedId }) => (
  <div style={{display: "flex"}}>
    <NavLink to="/" exact activeStyle={{ color: "red" }} style={{flexGrow: 4}}>
      Home
    </NavLink>
    <NavLink
      to={`/users/${authedId}`}
      activeStyle={{ color: "red" }}
      style={{flexGrow: 1}}
    >
      Profile
    </NavLink>
    <div
      onClick={() => {
        removeToken();
        history.push("/");
      }}
      style={{ ...styles.rightNavs, ...styles.logoutBtn }}
    >
      Logout
    </div>
  </div>
);


export default PatronsNavbar;