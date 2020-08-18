import styled from "styled-components";

import { COLOR_PRIMARY } from "styles/colors";

export const Form = styled.form`
  width: 100%;
  max-width: 448px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${COLOR_PRIMARY};
  padding: 40px 32px;
`;
