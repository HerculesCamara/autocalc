import styled from 'styled-components'

export const CardContainer = styled.section`
  max-width: 1328px;
  min-height: 560px;
  max-height: 665px;

  background-color: #fff;
  border-radius: 25px;

  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);

  width: 60%;

  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1600px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`
