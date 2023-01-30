import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** Higher-Order Component for private routes.
*
* Checks if there is a valid current user before continuing to the route
* If no current user, redirects to login form.
*/

function PrivateRoute() {
  const { currentUser } = useContext(UserContext);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;