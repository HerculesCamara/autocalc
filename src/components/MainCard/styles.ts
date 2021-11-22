import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 60%;
  max-width: 1328px;
  max-height: auto;

  background-color: #fff;
  border-radius: 1rem;

  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);

  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1600px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 98%;
  }
`
