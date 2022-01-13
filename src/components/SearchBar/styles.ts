import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100px;
  grid-template-columns: 1fr max-content;

  ${({ theme }) => {
    const Mobile = css`
      max-width: 400px;
      padding: 0.425rem;
    `

    const Desktop = css`
      padding: 0.5rem;
      max-width: 670px;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`
export const Input = styled.input`
  flex: 1;
  border: none;
  padding: 0 0.625rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  ${({ theme }) => {
    const Mobile = css`
      padding: 0 0.625rem;
    `

    const Desktop = css`
      padding: 0 1rem;
      font-size: 1.25rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: none;
  background-color: ${({ theme }) => theme.colors.primary};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => {
    const Mobile = css`
      width: 2.155rem;
      height: 2.155rem;
    `

    const Desktop = css`
      width: 4rem;
      height: 4rem;

      svg {
        width: 22px;
        height: 22px;
      }
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`
