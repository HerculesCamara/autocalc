import styled from 'styled-components'

export const CardContainer = styled.button`
  background-color: ${props => props.theme.colors.cardBackground};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  border: solid 1px;
  border-color: ${props => props.theme.colors.grayLightBorderCard};

  width: 10rem;
  height: 10.5rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-self: center;

  margin: 1rem;

  transition: all 0.2s;

  h4 {
    color: ${props => props.theme.colors.grayMedium};
    font-size: 1.15rem;
    font-weight: 400;
    margin: 0.5rem;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 40%;

    svg {
      fill: #8a8a8a;
    }
  }

  &:hover {
    border-color: ${props => props.theme.colors.placeholder};

    h4 {
      color: ${props => props.theme.colors.primary};
    }

    .icon {
      svg {
        fill: ${props => props.theme.colors.primary};
      }
    }
  }

  @media (max-height: 800px) {
    width: 9rem;
    height: 9.5rem;

    h4 {
      font-size: 1rem;
    }
  }
`
