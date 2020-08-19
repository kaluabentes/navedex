import React from "react";

import { LargeTitle, SmallTitle } from "./styles";

const DEFAULT_PROPS = {
  size: "large",
  marginBottom: 0,
};

interface TitleProps {
  children: React.ReactNode;
  size?: "small" | "large";
  marginBottom?: number;
}

export default function Title({ size, children, marginBottom }: TitleProps) {
  if (size === "small") {
    return <SmallTitle marginBottom={marginBottom}>{children}</SmallTitle>;
  }

  return <LargeTitle marginBottom={marginBottom}>{children}</LargeTitle>;
}

Title.defaultProps = DEFAULT_PROPS;
