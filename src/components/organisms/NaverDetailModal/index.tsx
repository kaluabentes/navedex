import React from "react";

import BaseModal from "components/molecules/BaseModal";
import IconButton from "components/atoms/IconButton";
import Title from "components/atoms/Title";
import {
  Container,
  Image,
  Content,
  Role,
  FieldTitle,
  FieldValue,
  Actions,
  CloseButton,
} from "./styles";
import { Naver } from "services/NaversApi";

interface NaverDetailModalProps {
  isOpen: boolean;
  naver: Naver | any;
  onDelete: () => void;
  onEdit: () => void;
  onClose: () => void;
}

export default function NaverDetailModal({
  isOpen,
  naver,
  onDelete,
  onEdit,
  onClose,
}: NaverDetailModalProps) {
  return (
    <BaseModal isOpen={isOpen}>
      <Container>
        <Image src={naver.image} alt={naver.name} />
        <Content>
          <CloseButton icon="close" onClick={onClose} />
          <Title size="small" marginBottom={10}>
            {naver.name}
          </Title>
          <Role>{naver.role}</Role>
          <FieldTitle>Idade</FieldTitle>
          <FieldValue>{naver.age}</FieldValue>
          <FieldTitle>Tempo de empresa</FieldTitle>
          <FieldValue>{naver.companyTime}</FieldValue>
          <FieldTitle>Projetos que participou</FieldTitle>
          <FieldValue>{naver.projects}</FieldValue>
          <Actions>
            <IconButton icon="delete" onClick={onDelete} />
            <IconButton icon="edit" onClick={onEdit} />
          </Actions>
        </Content>
      </Container>
    </BaseModal>
  );
}
