import React, { useRef } from "react";

import InputLabel from "components/molecules/InputLabel";
import Button from "components/atoms/Button";
import {
  Form,
  InputsGrid,
  ActionContainer,
  Loader,
  LabelLoader,
  InputLoader,
} from "./styles";

interface NaveFormProps {
  isLoading?: boolean;
  isSaving: boolean;
  name: string;
  role: string;
  age: string;
  companyTime: string;
  projects: string;
  image: string;
  submitLabel: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export default function NaveForm({
  isLoading,
  isSaving,
  name,
  role,
  age,
  companyTime,
  projects,
  image,
  submitLabel,
  onChange,
  onSubmit,
}: NaveFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit() {
    const formElement = formRef.current as HTMLFormElement;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    onSubmit();
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  function renderLoader() {
    return (
      <Loader>
        <LabelLoader />
        <InputLoader />
      </Loader>
    );
  }

  return (
    <Form ref={formRef}>
      <InputsGrid>
        {isLoading ? (
          <>
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
          </>
        ) : (
          <>
            <InputLabel
              id="name"
              name="name"
              type="text"
              label="Nome"
              placeholder="Nome"
              value={name}
              onChange={onChange}
              isRequired
            />
            <InputLabel
              id="role"
              name="role"
              type="text"
              label="Cargo"
              placeholder="Cargo"
              value={role}
              onChange={onChange}
              isRequired
            />
            <InputLabel
              id="age"
              name="age"
              type="text"
              label="Idade"
              placeholder="Idade"
              value={age}
              onChange={onChange}
              isRequired
            />
            <InputLabel
              id="companyTime"
              name="companyTime"
              type="text"
              label="Tempo de empresa"
              placeholder="Tempo de empresa"
              value={companyTime}
              onChange={onChange}
              isRequired
            />
            <InputLabel
              id="projects"
              name="projects"
              type="text"
              label="Projetos que participou"
              placeholder="Projetos que participou"
              value={projects}
              onChange={onChange}
              isRequired
            />
            <InputLabel
              id="image"
              name="image"
              type="text"
              label="URL da foto do Naver"
              placeholder="URL da foto do Naver"
              value={image}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              isRequired
            />
          </>
        )}
      </InputsGrid>
      <ActionContainer>
        <Button
          variant="primary"
          onClick={handleSubmit}
          isInline
          isLoading={isSaving}
        >
          {submitLabel}
        </Button>
      </ActionContainer>
    </Form>
  );
}
