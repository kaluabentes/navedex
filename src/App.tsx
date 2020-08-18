import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Routes from "./Routes";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <Router>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}
