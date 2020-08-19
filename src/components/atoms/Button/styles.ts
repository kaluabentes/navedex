import styled, { css, keyframes } from "styled-components";

import { COLOR_PRIMARY } from "styles/colors";

export const Container = styled.button<{
  isInline?: boolean;
  variant: "primary" | "light";
}>`
  font-size: 0.875rem;
  padding: 12px 8px;
  border: 0;
  width: 100%;
  display: block;
  font-weight: 600;
  border: 1px solid transparent;

  ${(props) =>
    props.variant === "primary" &&
    css`
      border-color: ${COLOR_PRIMARY};
      background: ${COLOR_PRIMARY};
      color: white;
    `}

  ${(props) =>
    props.variant === "light" &&
    css`
      background: white;
      color: ${COLOR_PRIMARY};
      border: 1px ${COLOR_PRIMARY} solid;
    `}

  ${(props) =>
    props.isInline &&
    css`
      display: inline-block;
      width: auto;
      padding: 12px 25px;
    `}
`;

export const Loader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 18px;
`;

const growDot = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2.5);
  }

  100% {
    transform: scale(1);
  }
`;

export const DotLoader = styled.div`
  height: 3px;
  width: 3px;
  margin: 0 5px;
  border-radius: 50%;
  background: white;
  animation: ${growDot} 1.5s linear infinite;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;
