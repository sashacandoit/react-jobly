import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** Higher-Order Component for private routes.
*
* Checks if there is a valid current user before continuing to the route
* If no current user, redirects to login form.
*/

function PrivateRoute({exact, path, children}) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    console.log("no user logged in")
    return <Navigate replace to="/login" />
  }
  
  console.log(`user logged in: ${currentUser.username}`)

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;