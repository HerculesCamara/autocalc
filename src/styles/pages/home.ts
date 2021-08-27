import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 15px;
  gap: 4rem;
  position: relative;

  .img {
    margin-top: auto;
    max-width: 320px;
  }

  .input {
    width: 50%;
    height: 4rem;
    min-width: 380px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #c4c4c4;
    border-radius: 50px;

    padding: 0.4rem 0.5rem 0.5rem 1.5rem;

    input {
      flex: 1;
      max-width: 80%;
      border: none;
      ::placeholder {
        color: ${props => props.theme.colors.placeholder};
      }
    }

    button {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50%;
      background: ${props => props.theme.colors.primary};

      svg {
        fill: ${props => props.theme.colors.white};
        width: 100%;
        height: 43%;
      }
    }
  }

  a {
    color: ${props => props.theme.colors.primary};
    margin-top: 1rem;

    :last-child {
      margin-top: auto;
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme.colors.grayMedium};
      text-decoration: underline;
    }
  }

  @media (max-width: 720px) {
    .input {
      width: 100%;
      min-width: auto;

      button {
        width: 39px;
        height: 39px;
      }
    }
  }
`
