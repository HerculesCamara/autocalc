import styled from 'styled-components'

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
  }
  @media (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
