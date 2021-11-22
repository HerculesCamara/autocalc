import styled from 'styled-components'

export const PaginatorContent = styled.section`
  display: flex;
  padding-bottom: 4rem;

  button {
    border: 0;
    border-radius: 10px;
    width: 15px;
    height: 15px;
    background-color: ${props => props.theme.colors.grayLight};

    margin: 0.5rem;

    &.active {
      background-color: ${props => props.theme.colors.primary};
    }

    &:hover {
      background-color: ${props => props.theme.colors.placeholder};

      &.active {
        background-color: ${props => props.theme.colors.primary};
      }
    }
  }
`
