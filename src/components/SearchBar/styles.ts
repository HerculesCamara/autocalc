import styled from 'styled-components'

export const SearchBarContent = styled.div`
  width: auto;

  display: flex;

  input {
    width: 250px;

    font-weight: 600;
    font-size: 1.5rem;

    border: 0;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.colors.grayLight};

    color: ${props => props.theme.colors.grayDark};
    text-align: right;

    margin-bottom: 1rem;

    &::placeholder {
      color: #a0a0a0;
    }

    &:active {
      border-color: ${props => props.theme.colors.primary};
    }
  }

  button {
    background: transparent;
    border: 0;
    margin-top: -10px;

    img {
      width: 2.1rem;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`
