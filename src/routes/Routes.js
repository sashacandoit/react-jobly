import React from "react";
import { Switch, Route } from "react-router-dom";

function Routes({ login, signup }) {
  
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/companies/:name">
          <Companies name="name" />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/jobs/:title">
          <Jobs title="title" />
        </Route>
        <Route exact path="/login">
          <Login username="username"/>
        </Route>
        <Route exact path="/signup">
          <Signup username="username" />
        </Route>
        <Route exact path="/users/:username">
          <User username="username" />
        </Route>
      </Switch>
    </div>
  )
}