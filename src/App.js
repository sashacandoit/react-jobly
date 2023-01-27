import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./navRoutes/NavRoutes"
import NavBar from "./navBar/NavBar";
// import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import JoblyApi from "./api";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";
import UserContext from "./auth/UserContext"

export const TOKEN_ID = "jobly-token"

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useLocalStorage(TOKEN_ID)

  /**Load User from API
   * Will not run until User logs in and has a token.
   * Will re-run when user logs out.
   */

  useEffect(function loadUserInfo() {
    async function getCurrUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currUser = await JoblyApi.getUser(username);
          setCurrentUser(currUser);
        } catch (err) {
          setCurrentUser(null)
        }
      }
    }
    getCurrUser();
  }, [token])

  /**Site-wide signup
   * 
   * Automatically logs in signed up user
   * Adds token to local storage
   */

  async function signup(formData) {
    try {
      let token = await JoblyApi.signup(formData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("failed signup", err);
      return { success: false, err };
    }
  };

  /**Site-wide login
   * 
   * Adds token to local storage
   */

  async function login(formData) {
    try {
      let token = await JoblyApi.login(formData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("failed login", err);
      return { success: false, err };
    }
  };

  /**Site-wide logout
   * 
   * removes token from local storage
   */

  async function logout() {
    setCurrentUser(null);
    setToken(null);
  };


  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <NavBar logout={logout} />
            <main>
              <NavRoutes login={login} signup={signup} />
            </main>

          </BrowserRouter>
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
