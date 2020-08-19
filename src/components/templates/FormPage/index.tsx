import React from "react";

import App from "components/templates/App";
import Title from "components/atoms/Title";
import { Container, BackButton, Header } from "./styles";

interface FormPageProps {
  title: string;
  onBack: () => void;
  children: React.ReactNode;
}

export default function FormPage({ title, onBack, children }: FormPageProps) {
  return (
    <App>
      <Container>
        <Header>
          <BackButton icon="arrow_back_ios" onClick={onBack} />
          <Title size="small">{title}</Title>
        </Header>
        {children}
      </Container>
    </App>
  );
}
