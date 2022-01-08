import { Fragment } from 'react'
import styled, { css } from 'styled-components'

export const Wrapper = Fragment

export const Main = styled.main`
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
