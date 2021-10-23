import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  padding: 15px;

  width: 100%;

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

      color: ${props => props.theme.colors.grayDark};

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
export const HomeCard = styled.section`
  width: 60%;
  max-width: 1328px;
  min-height: 560px;
  max-height: 756px;

  background-color: #fff;
  border-radius: 1rem;

  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);

  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1600px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`
