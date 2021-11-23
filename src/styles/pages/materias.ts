import styled from 'styled-components'

export const MateriasContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 1fr);

  flex: 1;
`

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  max-width: 850px;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  grid-auto-rows: auto;
  padding: 0 2rem;

  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 400px;
    padding: 0 1rem;
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 0.5rem;
  }
`
