import styled from 'styled-components'

export const HeaderSobre = styled.div`
  width: 100%;

  padding: 2rem 20rem;

  background: ${props => props.theme.colors.background};

  display: flex;

  justify-content: space-between;

  img {
    width: 17rem;
  }

  .input {
    width: 50%;
    height: 4rem;
    min-width: 380px;
    max-width: 600px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #c4c4c4;
    border-radius: 50px;

    padding: 0.4rem 0.5rem 0.5rem 1.5rem;

    background-color: ${props => props.theme.colors.white};
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
`

export const SobreContainer = styled.div`
  width: 100%;

  padding: 3rem 23rem;
  padding-bottom: 15rem;

  background: ${props => props.theme.colors.white};

  h1 {
    font-size: 1rem;
    font-weight: 300;
    color: ${props => props.theme.colors.grayLight};
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 20rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h2 {
        font-size: 2rem;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};
      }
      p {
        max-width: 37rem;

        margin-top: 1.7rem;

        font-size: 1.7rem;
        font-weight: 300;
        color: ${props => props.theme.colors.grayText};
      }
    }
  }

  section:nth-child(odd) {
    .content {
      text-align: right;
    }
  }

  > p {
    margin-top: -1.7rem;

    font-size: 1.2rem;
    color: ${props => props.theme.colors.grayText};
  }

  button {
    width: 23rem;
    height: 4rem;

    border: none;
    border-radius: 2rem;

    margin-top: 3.4rem;

    font-size: 1.7rem;
    color: ${props => props.theme.colors.white};

    background-color: ${props => props.theme.colors.primary};

    transition: 0.2s;

    &:hover {
      filter: opacity(0.7);
    }
  }
`

export const FooterSobre = styled.div`
  width: 100%;

  background-color: ${props => props.theme.colors.white};
  .line {
    background-color: ${props => props.theme.colors.grayLight};
    width: 100%;
    height: 1px;
  }
  .contentFooter {
    padding: 3rem 23rem;
    img {
      width: 15rem;
      cursor: pointer;
    }
  }
`
