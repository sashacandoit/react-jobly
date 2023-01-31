import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "../home/Home";
import Companies from "../companies/Companies";
import CompanyDetail from "../companies/CompanyDetail";

import Jobs from "../jobs/Jobs";

import Profile from "../profiles/Profile";
import Login from "../auth/Login";
import Signup from "../auth/Signup";


function NavRoutes({ login, signup, logout }) {

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login username="username" login={login} />}></Route>
        <Route exact path="/signup" element={<Signup signup={signup} />}></Route>

        {/* Protected Routes */}
        <Route exact path='/companies' element={<PrivateRoute />}>
          <Route exact path='/companies' element={<Companies />} />
        </Route>
        <Route exact path='/companies/:handle' element={<PrivateRoute />}>
          <Route exact
            path="/companies/:handle"
            element={<CompanyDetail handle="handle" />}>
          </Route>
        </Route>
        <Route exact path='/jobs' element={<PrivateRoute />}>
          <Route exact path='/jobs' element={<Jobs />} />
        </Route>
        <Route exact path='/users/:username' element={<PrivateRoute />}>
          <Route exact path="/users/:username" element={<Profile username="username" logout={logout} />}></Route>
        </Route>
        
      </Routes>
    </div>
  )
}

export default NavRoutes;