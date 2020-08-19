import React from "react";

import App from "components/templates/App";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import TitleHeader from "components/organisms/TitleHeader";
import NaverCardGrid from "components/organisms/NaverCardGrid";
import NaverCard from "components/molecules/NaverCard";
import useNaversIndex from "hooks/useNaversIndex";
import { Naver } from "services/NaversApi";

export default function Navers() {
  const [navers, isLoading] = useNaversIndex();

  return (
    <App>
      <TitleHeader>
        <Title size="large">Navers</Title>
        <Button isInline>Adicionar Naver</Button>
      </TitleHeader>
      <NaverCardGrid>
        {isLoading ? (
          <>
            <NaverCard.Loader />
            <NaverCard.Loader />
            <NaverCard.Loader />
            <NaverCard.Loader />
          </>
        ) : (
          navers.map((naver: Naver) => (
            <NaverCard
              key={naver.id}
              image={naver.image}
              name={naver.name}
              role={naver.role}
              onDelete={() => {}}
              onEdit={() => {}}
            />
          ))
        )}
      </NaverCardGrid>
    </App>
  );
}
