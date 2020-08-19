import styled, { css } from "styled-components";

export const LargeTitle = styled.h2<{ marginBottom?: number }>`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;

  ${(props) => css`
    margin-bottom: ${props.marginBottom}px;
  `}
`;

export const SmallTitle = styled.h3<{ marginBottom?: number }>`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;

  ${(props) => css`
    margin-bottom: ${props.marginBottom}px;
  `}
`;
