import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  flex-wrap: wrap;
  grid-auto-rows: auto;
  padding: 0 2rem;

  overflow-y: auto;
`
