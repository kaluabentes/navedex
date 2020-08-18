import React from "react";

import Logo from "components/atoms/Logo";
import { Container, ExitButton } from "./styles";

interface AppBarProps {
  onExit: () => void;
}

export default function AppBar({ onExit }: AppBarProps) {
  return (
    <Container>
      <Logo size="small" />
      <ExitButton type="button" onClick={onExit}>
        Sair
      </ExitButton>
    </Container>
  );
}
