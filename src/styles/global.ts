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

  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Rowdies', cursive;
    :focus {
      outline: none;
    }
  }

  body {
    font: 400 1rem 'Rowdies', cursive;

    background-color: ${props => props.theme.colors.background};

    main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 12px;
    }
  }

  #__next {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
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
