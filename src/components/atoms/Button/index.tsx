import React from "react";

import { Container, Loader, DotLoader } from "./styles";

interface ButtonProps {
  variant: "primary" | "light";
  onClick?: () => void;
  children: React.ReactNode;
  isInline?: boolean;
  isLoading?: boolean;
}

const DEFAULT_PROPS = {
  isInline: false,
  isLoading: false,
  onClick: () => {},
};

export default function Button({
  variant,
  onClick,
  children,
  isInline,
  isLoading,
}: ButtonProps) {
  return (
    <Container
      variant={variant}
      onClick={onClick}
      type="button"
      isInline={isInline}
    >
      {isLoading ? (
        <Loader>
          <DotLoader />
          <DotLoader />
          <DotLoader />
        </Loader>
      ) : (
        children
      )}
    </Container>
  );
}

Button.defaultProps = DEFAULT_PROPS;
