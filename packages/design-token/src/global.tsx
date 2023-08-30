import { createGlobalStyle } from "styled-components";
import color from "./color";
import ResetCSS from "./reset";

const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  input[type="checkbox"],
  input[type="radio"] {
    accent-color: #1470ff;
    cursor: pointer;
  }

  p {
    display: inline-block;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  label {
    cursor: pointer;
  }

  input,
  textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    border: none;
    outline: none;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  .link {
    color: ${color.maruDefault};
    text-decoration: underline;
  }
`;

export default GlobalStyle;
