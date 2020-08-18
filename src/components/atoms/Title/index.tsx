import React from "react";

import { LargeTitle, SmallTitle } from "./styles";

const DEFAULT_PROPS = {
  size: "large",
};

interface TitleProps {
  children: React.ReactNode;
  size?: "small" | "large";
}

export default function Title({ size, children }: TitleProps) {
  if (size === "small") {
    return <SmallTitle>{children}</SmallTitle>;
  }

  return <LargeTitle>{children}</LargeTitle>;
}

Title.defaultProps = DEFAULT_PROPS;
