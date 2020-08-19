import React from "react";

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
  onDelete,
  onEdit,
}: NaverCardProps) {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <Role>{role}</Role>
      <IconButton icon="delete" onClick={onDelete} />
      <IconButton icon="edit" onClick={onEdit} />
    </Container>
  );
}

NaverCard.Loader = Loader;
