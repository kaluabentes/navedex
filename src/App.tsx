import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import Routes from "./Routes";
import GlobalStyle from "./styles/GlobalStyle";
import { useUserContext } from "contexts/user";

export default function App() {
  const [user] = useUserContext();
  const history = useHistory();

  useEffect(() => {
    if (!user.token) {
      history.push("/");
      return;
    }

    if (history.location.pathname === "/") {
      history.push("/navers");
    }
  }, [history, user.token]);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Routes />
    </>
  );
}
