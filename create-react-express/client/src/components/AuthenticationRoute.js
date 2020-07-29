import React from "react";
import { Route } from "react-router-dom";
import { isAuthed } from "../tokenUtils";

const AuthenticationRoute = ({
  authComponent: AuthComponent,
  unAuthComponent: UnAuthComponent,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const authedId = isAuthed();
      return authedId ? (
        <AuthComponent authedId={authedId} {...props} />
      ) : (
        <UnAuthComponent {...props} />
      );
    }}
  />
);

export default AuthenticationRoute;