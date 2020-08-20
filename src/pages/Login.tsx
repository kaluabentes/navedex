import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import LoginForm from "components/organisms/LoginForm";
import CenterElementPage from "components/atoms/CenterElementPage";
import { useUserContext } from "contexts/user";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, dispatch] = useUserContext();
  const history = useHistory();

  useEffect(() => {
    if (user.token) {
      history.push("/navers");
    }
  }, [user.token, history]);

  function handleSubmit() {
    dispatch({ token: "token" });
    history.push("/navers");
  }

  return (
    <>
      <Helmet>
        <title>Login - Navedex</title>
      </Helmet>
      <CenterElementPage>
        <LoginForm
          email={email}
          password={password}
          onEmailChange={(event) => setEmail(event.target.value)}
          onPasswordChange={(event) => setPassword(event.target.value)}
          onSubmit={handleSubmit}
        />
      </CenterElementPage>
    </>
  );
}
