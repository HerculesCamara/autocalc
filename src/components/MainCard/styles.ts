import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 60%;
  height: 70%;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 1366px) and (min-width: 720px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`
