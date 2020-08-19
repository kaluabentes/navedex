import React from "react";

import Input from "components/atoms/Input";
import Label from "components/atoms/Label";
import { Container } from "./styles";

const DEFAULT_PROPS = {
  isRequired: false,
  marginBottom: 0,
  placeholder: "",
  onKeyPress: () => {},
};

interface InputLabelProps {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  marginBottom?: number;
}

export default function InputLabel({
  id,
  onChange,
  onKeyPress,
  value,
  type,
  label,
  isRequired,
  marginBottom,
  placeholder,
}: InputLabelProps) {
  return (
    <Container marginBottom={marginBottom}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
        type={type}
        placeholder={placeholder}
        required={isRequired}
      />
    </Container>
  );
}

InputLabel.defaultProps = DEFAULT_PROPS;
