import styled, { css } from "styled-components";

export const Container = styled.div<{ marginBottom?: number }>`
  width: 100%;

  ${(props) => css`
    margin-bottom: ${props.marginBottom}px;
  `}
`;
