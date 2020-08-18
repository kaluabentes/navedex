import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { UserProvider } from "contexts/user";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
