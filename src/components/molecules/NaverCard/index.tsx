import React from "react";

import Actionable from "components/atoms/Actionable";
import IconButton from "components/atoms/IconButton";
import {
  Container,
  Image,
  Name,
  Role,
  ImageLoader,
  NameLoader,
  RoleLoader,
} from "./styles";

interface NaverCardProps {
  image: string;
  name: string;
  role: string;
  onClick: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

function Loader() {
  return (
    <Container>
      <ImageLoader />
      <NameLoader />
      <RoleLoader />
    </Container>
  );
}

export default function NaverCard({
  image,
  name,
  role,
  onClick,
  onDelete,
  onEdit,
}: NaverCardProps) {
  return (
    <Container>
      <Actionable type="button" onClick={onClick}>
        <Image src={image} alt={name} />
      </Actionable>
      <Name>{name}</Name>
      <Role>{role}</Role>
      <IconButton icon="delete" onClick={onDelete} />
      <IconButton icon="edit" onClick={onEdit} />
    </Container>
  );
}

NaverCard.Loader = Loader;
