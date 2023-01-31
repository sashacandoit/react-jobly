import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./navRoutes/NavRoutes"
import NavBar from "./navBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingSpinner from "./common/LoadingSpinner";
import JoblyApi from "./api";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";
import UserContext from "./auth/UserContext"

export const TOKEN_ID = "jobly-token"

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [dataLoaded, setDataLoaded] = useState(false);
  const [token, setToken] = useLocalStorage(TOKEN_ID);

  /**Load User from API
   * Will not run until User logs in and has a token.
   * Will re-run when user logs out.
   */

  useEffect(function loadUser() {
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
      setDataLoaded(true);
    }
    // Set dataLoaded to false while async getCurrUser runs
    // set back to false once data is fetched or if error occurs
    setDataLoaded(false)
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

  /** Site-wide logout - removes token from local storage */

  async function logout() {
    setCurrentUser(null);
    setToken(null);
  };

  /** Check if job has been Applied for */
  function hasApplied(id) {
    return applicationIds.has(id);
  }

  /** Apply to Job - makes an API call and updates set of Application IDs in state */
  function applyToJob(id) {
    if (hasApplied(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]))
  };

  if (!dataLoaded) return <LoadingSpinner />


  return (
    <div className="App">
    <header className="App-header">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser, applyToJob, hasApplied }}>
        <NavBar logout={logout} />
        <main>
          <NavRoutes login={login} signup={signup} logout={logout} />
        </main>
        </UserContext.Provider>
      </BrowserRouter>
    </header>
  </div>
  );
}

export default App;
