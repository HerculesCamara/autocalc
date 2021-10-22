import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1% 12px 12px;

  .img {
    max-width: 320px;
  }

  @media (min-width: 768px) {
    .img {
      max-width: 260px;
    }
  }
`
