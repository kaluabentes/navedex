import React from "react";

import AppBar from "components/organisms/AppBar";
import { Main } from "./styles";
import { useUserContext } from "contexts/user";

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  const [, dispatch] = useUserContext();

  function handleExit() {
    dispatch({ token: undefined });
  }

  return (
    <>
      <AppBar onExit={handleExit} />
      <Main>{children}</Main>
    </>
  );
}
