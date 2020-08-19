import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import FormPage from "components/templates/FormPage";
import NaverForm from "components/organisms/NaverForm";
import AlertModal from "components/organisms/AlertModal";
import NaversApi from "services/NaversApi";

const INITIAL_STATE = {
  name: "",
  role: "",
  age: "",
  companyTime: "",
  projects: "",
  image: "",
};

export default function CreateNaver() {
  const [naver, setNaver] = useState(INITIAL_STATE);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const history = useHistory();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNaver({
      ...naver,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    setIsSaving(true);

    NaversApi.store(naver).then(() => {
      setIsSaving(false);
      setIsAlertOpen(true);
      setNaver(INITIAL_STATE);
    });
  }

  return (
    <FormPage title="Adicionar Naver" onBack={() => history.push("/navers")}>
      <NaverForm
        {...naver}
        isLoading={isSaving}
        submitLabel="Salvar"
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <AlertModal
        isOpen={isAlertOpen}
        title="Naver criado"
        text="Naver criado com sucesso!"
        onClose={() => setIsAlertOpen(false)}
      />
    </FormPage>
  );
}
