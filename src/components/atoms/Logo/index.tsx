import React from "react";

import { Image } from "./styles";
import logo from "./logo.svg";

const DEFAULT_PROPS = {
  marginBottom: 0,
};

interface LogoProps {
  size: "small" | "large";
  marginBottom?: number;
}

export default function Logo({ size, marginBottom }: LogoProps) {
  return (
    <Image size={size} src={logo} alt="Navedex" marginBottom={marginBottom} />
  );
}

Logo.defaultProps = DEFAULT_PROPS;
