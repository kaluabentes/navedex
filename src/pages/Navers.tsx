import React from "react";

import App from "components/templates/App";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import TitleHeader from "components/organisms/TitleHeader";

export default function Navers() {
  return (
    <App>
      <TitleHeader>
        <Title size="large">Navers</Title>
        <Button isInline>Adicionar Naver</Button>
      </TitleHeader>
    </App>
  );
}
