import React from "react";

import AppBar from "components/organisms/AppBar";
import { Main } from "./styles";

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  function handleExit() {}

  return (
    <>
      <AppBar onExit={handleExit} />
      <Main>{children}</Main>
    </>
  );
}
