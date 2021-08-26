import { createGlobalStyle, css } from 'styled-components'

const Css = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Rowdies', cursive;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`
const GlobalStyles = createGlobalStyle`${Css}`

export default GlobalStyles
