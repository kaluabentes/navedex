import React from "react";

import Icon from "components/atoms/Icon";
import { Container } from "./styles";

const DEFAULT_PROPS = {
  variant: undefined,
  className: undefined,
};

interface Props {
  icon: string;
  onClick: (event: React.MouseEvent) => void;
  className?: string;
  variant?: "default" | undefined;
}

export default function IconButton({
  icon,
  onClick,
  className,
  variant,
}: Props): React.ReactElement {
  return (
    <Container
      variant={variant}
      className={className}
      onClick={onClick}
      type="button"
    >
      <Icon>{icon}</Icon>
    </Container>
  );
}

IconButton.defaultProps = DEFAULT_PROPS;
