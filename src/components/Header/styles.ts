import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1% 12px 12px;

  flex: 1;

  .img {
    max-width: 320px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .img {
      max-width: 260px;
    }
  }

  @media (max-width: 550px) {
    .img {
      max-width: 230px;
    }
  }
`
