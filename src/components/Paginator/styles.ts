import styled from 'styled-components'

export const PaginatorContent = styled.section`
  display: flex;
  padding: 1rem;

  div {
    border: 0;
    border-radius: 10px;
    width: 20px;
    background-color: ${props => props.theme.colors.grayLight};

    .active {
      background-color: ${props => props.theme.colors.primary};
    }

    &:hover {
      background-color: ${props => props.theme.colors.placeholder};
    }
  }
`
