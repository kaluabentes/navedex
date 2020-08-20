import styled, { css } from "styled-components";

import { glow } from "styles/animations";

export const Form = styled.form``;

export const InputsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-bottom: 32px;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const commonLoader = css`
  background: rgba(0, 0, 0, 0.1);
  animation: ${glow} 1.5s linear infinite;
`;

export const Loader = styled.div``;

export const LabelLoader = styled.div`
  ${commonLoader}
  height: 15px;
  width: 30%;
  margin: 0 0 10px 0;
`;

export const InputLoader = styled.div`
  ${commonLoader}
  height: 30px;
  width: 100%;
`;
