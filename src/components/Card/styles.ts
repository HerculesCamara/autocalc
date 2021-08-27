import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;

  width: 195px;
  height: 195px;

  gap: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  margin: 0.5rem;

  h4 {
    color: ${props => props.theme.colors.grayMedium};
    font-size: 1.25rem;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 40%;
  }
`
