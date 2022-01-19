import { Fragment } from 'react'
import styled, { css } from 'styled-components'

export const Wrapper = Fragment

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px;

  ${({ theme }) => {
    const Mobile = css`
      background-color: red;
    `

    const Desktop = css`
      background-color: blue;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`
