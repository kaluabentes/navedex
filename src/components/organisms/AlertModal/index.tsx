import React from "react";

import BaseModal from "components/molecules/BaseModal";
import Title from "components/atoms/Title";
import { Container, Text, CloseButton } from "./styles";

interface AlertModalProps {
  isOpen: boolean;
  title: string;
  text: string;
  onClose: () => void;
}

export default function AlertModal({
  isOpen,
  title,
  text,
  onClose,
}: AlertModalProps) {
  return (
    <BaseModal isOpen={isOpen}>
      <Container>
        <CloseButton icon="close" onClick={onClose} />
        <Title size="small" marginBottom={24}>
          {title}
        </Title>
        <Text>{text}</Text>
      </Container>
    </BaseModal>
  );
}
