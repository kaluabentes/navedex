import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import LoginForm from "components/organisms/LoginForm";
import CenterElementPage from "components/atoms/CenterElementPage";
import { useUserContext } from "contexts/user";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, dispatch] = useUserContext();
  const history = useHistory();

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
