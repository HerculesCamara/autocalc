import styled from 'styled-components'

export const HeaderSobre = styled.div`
  width: 100%;

  padding: 2rem 20rem;

  background: ${props => props.theme.colors.background};

  display: flex;
  gap: 1rem;

  justify-content: space-between;

  img {
    width: 17rem;

    cursor: pointer;
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

  @media (max-width: 1440px) {
    padding: 3rem 7rem;
  }

  @media (max-width: 820px) {
    padding: 2rem 1rem;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    img {
      width: 13rem;
    }

    .input {
      min-width: 280px;
      max-width: 300px;
    }
  }
`

export const Container = styled.main`
  width: 100%;
  padding: 0;
  flex-direction: column;

  background: ${props => props.theme.colors.white};

  > div {
    padding: 1rem 0rem;
    padding-bottom: 8rem;

    max-width: 1460px;
    margin: auto;
  }
`

export const SobreContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1rem;
    font-weight: 300;
    color: ${props => props.theme.colors.grayLight};
  }

  section {
    /* max-width: 1220px; */

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

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
    margin-top: -2.7rem;

    font-size: 1.2rem;
    color: ${props => props.theme.colors.grayText};
  }

  button {
    width: 23rem;
    height: 4rem;

    border: none;
    border-radius: 2rem;

    margin-top: 2.4rem;

    font-size: 1.7rem;
    color: ${props => props.theme.colors.white};

    background-color: ${props => props.theme.colors.primary};

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.7);
    }
  }

  @media (max-width: 1440px) {
    padding: 3rem 7rem;
  }

  @media (max-width: 800px) {
    padding: 3rem 3rem;
  }

  // A partir daqui vai seguir o design mobile
  @media (max-width: 600px) {
    padding: 3rem 2rem;

    flex-direction: column;

    section {
      display: grid;
      /* grid-template: 1fr 1fr 1fr; */

      gap: 1rem;

      .content {
        align-items: center;
        text-align: center;
      }
    }

    section:nth-child(odd) {
      .content {
        text-align: center;
      }
    }

    > p {
      margin-top: 1.7rem;
    }

    button {
      width: 20rem;
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

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img {
      width: 15rem;
      cursor: pointer;
    }

    a {
      color: ${props => props.theme.colors.grayText};

      transition: 0.2s;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }

    .socials {
      > strong {
        font-weight: 300;
        font-size: 1rem;

        color: ${props => props.theme.colors.grayText};
      }

      .socialsLogos {
        margin-top: 0.3rem;

        display: flex;

        gap: 1rem;
        svg {
          width: 2.3rem;
          height: 2.3rem;

          fill: ${props => props.theme.colors.grayText};

          cursor: pointer;

          transition: 0.2s;

          &:hover {
            fill: ${props => props.theme.colors.primary};
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .contentFooter {
      padding: 3rem 7rem;
    }
  }

  @media (max-width: 540px) {
    .contentFooter {
      padding: 3rem 3rem;
      gap: 2rem;
      flex-direction: column;

      img {
        width: 12rem;
      }
    }
  }
`
