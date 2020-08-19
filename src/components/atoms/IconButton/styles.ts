import styled from "styled-components";

import { COLOR_PRIMARY } from "styles/colors";

export const Container = styled.button<{ variant?: "default" | undefined }>`
  background: transparent;
  padding: 0;
  border: 0;
  color: ${COLOR_PRIMARY};
  line-height: 0;
  display: inline-block;
  outline: 0;
  border-radius: 50%;
  transition: 0.3s;
  margin-right: 16px;

  &::last-of-type {
    margin-right: 0;
  }
`;
