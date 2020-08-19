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
import ConfirmModal from "components/organisms/ConfirmModal";
import NaversApi from "services/NaversApi";

export default function Navers() {
  const [navers, isLoading, fetchNavers] = useNaversIndex();
  const [naver, setNaver] = useState<Naver>({
    id: 0,
    image: "",
    name: "",
    role: "",
    age: "",
    companyTime: "",
    projects: "",
  });
  const [isNaverOpen, setIsNaverOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  function openNaverDetail(naver: Naver) {
    setNaver(naver);
    setIsNaverOpen(true);
  }

  function openConfirmDelete(naver: Naver) {
    setNaver(naver);
    setIsConfirmOpen(true);
  }

  function deleteNaver() {
    setIsDeleting(true);

    NaversApi.delete(naver.id).then(() => {
      fetchNavers(true);
      setIsConfirmOpen(false);
      setIsNaverOpen(false);
      setIsDeleting(false);
    });
  }

  return (
    <App>
      <TitleHeader>
        <Title size="large">Navers</Title>
        <Button variant="primary" isInline>
          Adicionar Naver
        </Button>
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
              onClick={() => openNaverDetail(naver)}
              onDelete={() => openConfirmDelete(naver)}
              onEdit={() => {}}
            />
          ))
        )}
      </NaverCardGrid>
      <NaverDetailModal
        isOpen={isNaverOpen}
        naver={naver || {}}
        onClose={() => setIsNaverOpen(false)}
        onDelete={() => openConfirmDelete(naver)}
        onEdit={() => {}}
      />
      <ConfirmModal
        isOpen={isConfirmOpen}
        isLoading={isDeleting}
        title="Excluir Naver"
        text="Tem certeza que deseja excluir este Naver?"
        confirmLabel="Excluir"
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={deleteNaver}
      />
    </App>
  );
}
