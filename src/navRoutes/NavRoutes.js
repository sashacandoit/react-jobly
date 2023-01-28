import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "../home/Home";
import Companies from "../companies/Companies";
import CompanyDetail from "../companies/CompanyDetail";

import Jobs from "../jobs/Jobs";
import JobDetail from "../jobs/JobDetail";

import Profile from "../profiles/Profile";
import Login from "../auth/Login";
import Signup from "../auth/Signup";


function NavRoutes({ login, signup }) {

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login username="username" login={login} />}></Route>
        <Route exact path="/signup" element={<Signup signup={signup} />}></Route>

        <Route exact
          path="/companies/:handle"
          element={<CompanyDetail handle="handle" />}>
        </Route>
        <Route exact path="/jobs" element={<Jobs />}></Route>
        <Route exact path="/jobs/:id" element={<JobDetail />}></Route>
        <Route exact path="/users/:username" element={<Profile username="username" />}></Route>

        {/* Protected Routes */}
        <Route exact
          path="/companies"
          element={<PrivateRoute><Companies /></PrivateRoute>}/>
        
      </Routes>
    </div>
  )
}

export default NavRoutes;