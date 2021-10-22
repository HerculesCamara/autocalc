import styled from 'styled-components'

export const PathUserContent = styled.div`
  width: 100%;

  padding: 0.7rem 1rem;

  border: 0;
  border-bottom: solid 2px;
  border-color: ${props => props.theme.colors.grayLight};

  label {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }
`
