import React, { useState } from "react";
import { Helmet } from "react-helmet";

import LoginForm from "components/organisms/LoginForm";
import CenterElementPage from "components/atoms/CenterElementPage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {}

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
