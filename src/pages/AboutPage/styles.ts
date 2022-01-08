import { Fragment } from 'react'
import styled, { css } from 'styled-components'

import LogoSvg from '@/assets/logo.svg'
import SearchSvg from '@/assets/search.svg'

export const Wrapper = Fragment

export const Header = styled.header`
  ${({ theme }) => {
    const Mobile = css`
      width: 100%;
      height: 12.5rem;

      background: ${({ theme }) => theme.colors.white};

      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
    `

    const Desktop = css`
      width: 100%;
      height: 13.75rem;

      background: ${({ theme }) => theme.colors.background};
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const LogoImg = styled(LogoSvg)`
  ${({ theme }) => {
    const Mobile = css`
      width: 12.25rem;
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const SearchBar = styled.div`
  ${({ theme }) => {
    const Mobile = css`
      width: auto;
      position: relative;
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const InputSearchBar = styled.input`
  ${({ theme }) => {
    const Mobile = css`
      width: 19.75rem;
      height: 2.87rem;

      padding: 0.2rem;
      padding-left: 1.5rem;

      border: solid 1px #c4c4c4;
      border-radius: 5rem;

      font-size: 1rem;
      color: ${({ theme }) => theme.colors.grayText};

      ::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
      }
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const BttSearchBar = styled.button`
  ${({ theme }) => {
    const Mobile = css`
      width: 2.25rem;
      height: 2.25rem;
      border: none;
      border-radius: 1rem;

      right: 0;

      position: absolute;
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const SearchImg = styled(SearchSvg)`
  ${({ theme }) => {
    const Mobile = css`
      width: 1rem;
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`
