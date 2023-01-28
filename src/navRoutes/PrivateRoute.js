import React, { useContext, useEffect } from "react";
import { Route, useNavigate, Outlet } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** Higher-Order Component for private routes.
*
* Checks if there is a valid current user before continuing to the route
* If no current user, redirects to login form.
*/

function PrivateRoute({ exact, path, routes }) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      return navigate("/login");
    }
  }, [])

  return (
    <Outlet />
  );
}

export default PrivateRoute;