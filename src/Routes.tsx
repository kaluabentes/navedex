import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import ListNavers from "./pages/ListNavers";
import CreateNaver from "./pages/CreateNaver";
import EditNaver from "./pages/EditNaver";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/navers">
        <ListNavers />
      </Route>
      <Route path="/navers/create">
        <CreateNaver />
      </Route>
      <Route path="/navers/edit/:id">
        <EditNaver />
      </Route>
    </Switch>
  );
}
