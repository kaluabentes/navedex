import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
