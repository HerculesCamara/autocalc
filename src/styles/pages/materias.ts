import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 75%;
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(4, 2fr);
  flex-wrap: wrap;
  grid-auto-rows: auto;
  padding: 0 2rem;

  overflow-y: auto;
`
