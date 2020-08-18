import styled, { css } from "styled-components";

export const Image = styled.img<{
  size: "small" | "large";
  marginBottom?: number;
}>`
  ${(props) =>
    props.size === "large" &&
    css`
      width: 100%;
      max-width: 235px;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      width: 100%;
      max-width: 145px;
    `}

  ${(props) => css`
    margin-bottom: ${props.marginBottom}px;
  `}
`;
