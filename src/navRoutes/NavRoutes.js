import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Companies from "../companies/Companies";
import Jobs from "../jobs/Jobs";
import Profile from "../profiles/Profile";
import Login from "../auth/Login";
import Signup from "../auth/Signup";


function NavRoutes({ login, signup }) {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/companies" element={<Companies />}></Route>
        <Route exact path="/companies/:name" element={<Companies name="name" />}></Route>
        <Route exact path="/jobs" element={<Jobs />}></Route>
        <Route exact path="/jobs/:title" element={<Jobs title="title" />}></Route>
        <Route exact path="/login" element={<Login username="username" />}></Route>
        <Route exact path="/signup" element={<Signup username="username" />}></Route>
        <Route exact path="/users/:username" element={<Profile username="username" />}></Route>
      </Routes>
    </div>
  )
}

export default NavRoutes;