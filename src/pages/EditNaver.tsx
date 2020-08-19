import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

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
  const { id } = useParams();

  useEffect(() => {
    async function fetchNaver() {
      try {
        const { data } = await NaversApi.show(id);

        setNaver(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchNaver();
  }, [id]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNaver({
      ...naver,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    setIsSaving(true);

    NaversApi.update(id, naver).then(() => {
      setIsSaving(false);
      setIsAlertOpen(true);
    });
  }

  return (
    <FormPage title="Editar Naver" onBack={() => history.push("/navers")}>
      <NaverForm
        {...naver}
        isLoading={isSaving}
        submitLabel="Salvar"
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <AlertModal
        isOpen={isAlertOpen}
        title="Naver atualizado"
        text="Naver atualizado com sucesso!"
        onClose={() => setIsAlertOpen(false)}
      />
    </FormPage>
  );
}
