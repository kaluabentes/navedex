import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}

  :root {
    font-family: 'Montserrat', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;
