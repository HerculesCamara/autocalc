import styled from 'styled-components'

export const BackBttContent = styled.button`
  font-size: 1rem;
  color: ${props => props.theme.colors.grayText};

  background-color: transparent;

  border: 0;

  position: absolute;
  z-index: 1;
  margin-left: 3rem;

  display: flex;

  justify-content: space-between;

  transition: filter 0.2s;

  p {
    margin-top: 0.3rem;
  }

  img {
    width: 30px;
    transform: rotate(180deg);
  }

  &:hover {
    filter: brightness(0.7);
  }
`
