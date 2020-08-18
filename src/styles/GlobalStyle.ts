import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
`;
