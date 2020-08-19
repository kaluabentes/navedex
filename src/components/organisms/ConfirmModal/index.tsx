import React from "react";

import BaseModal from "components/molecules/BaseModal";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import { Container, Text, Actions } from "./styles";

interface ConfirmModalProps {
  isOpen: boolean;
  isLoading: boolean;
  title: string;
  text: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const DEFAULT_PROPS = {
  cancelLabel: "Cancelar",
  confirmLabel: "Confirm",
};

export default function ConfirmModal({
  isOpen,
  isLoading,
  title,
  text,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <BaseModal isOpen={isOpen}>
      <Container>
        <Title size="small" marginBottom={24}>
          {title}
        </Title>
        <Text>{text}</Text>
        <Actions>
          <Button isInline variant="light" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button
            isInline
            variant="primary"
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </Actions>
      </Container>
    </BaseModal>
  );
}

ConfirmModal.defaultProps = DEFAULT_PROPS;
