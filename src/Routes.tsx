import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Navers from "./pages/Navers";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/navers">
        <Navers />
      </Route>
    </Switch>
  );
}
