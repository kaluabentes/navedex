import React from "react";

import { Container, Content } from "./styles";

interface BaseModal {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function BaseModal({ isOpen, children }: BaseModal) {
  return (
    <Container isOpen={isOpen}>
      <Content isOpen={isOpen}>{children}</Content>
    </Container>
  );
}
