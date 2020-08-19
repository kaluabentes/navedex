import React, { useState } from "react";

import App from "components/templates/App";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import TitleHeader from "components/organisms/TitleHeader";
import NaverCardGrid from "components/organisms/NaverCardGrid";
import NaverCard from "components/molecules/NaverCard";
import useNaversIndex from "hooks/useNaversIndex";
import { Naver } from "services/NaversApi";
import NaverDetailModal from "components/organisms/NaverDetailModal";

export default function Navers() {
  const [navers, isLoading] = useNaversIndex();
  const [naver, setNaver] = useState<Naver | undefined>(undefined);
  const [isNaverOpen, setIsNaverOpen] = useState(false);

  function handleNaverClick(naver: Naver) {
    setNaver(naver);
    setIsNaverOpen(true);
  }

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
              onClick={() => handleNaverClick(naver)}
              onDelete={() => {}}
              onEdit={() => {}}
            />
          ))
        )}
      </NaverCardGrid>
      <NaverDetailModal
        isOpen={isNaverOpen}
        naver={naver || {}}
        onClose={() => setIsNaverOpen(false)}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    </App>
  );
}
