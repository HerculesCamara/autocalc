import { Fragment } from 'react'
import styled, { css } from 'styled-components'

import LogoSvg from '@/assets/logo.svg'
import SearchSvg from '@/assets/search.svg'
import Section1Svg from '@/assets/about-us1.svg'
import Section2Svg from '@/assets/about-us2.svg'
import Section3Svg from '@/assets/about-us3.svg'

export const Wrapper = Fragment

export const Header = styled.header`
  ${({ theme }) => {
    const Mobile = css`
      width: 100%;
      height: 12.5rem;

      background: ${({ theme }) => theme.colors.background};

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

      display: flex;
      align-items: center;
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
      border-radius: 3rem;

      position: absolute;

      right: 0;
      margin-right: 0.35rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${({ theme }) => theme.colors.primary};
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const SearchImg = styled(SearchSvg)`
  ${({ theme }) => {
    const Mobile = css``

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Container = styled.div`
  ${({ theme }) => {
    const Mobile = css`
      width: 100%;

      background: ${({ theme }) => theme.colors.white};

      padding: 0 3rem;
      padding-top: 1.5rem;
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Title = styled.h1`
  ${({ theme }) => {
    const Mobile = css`
      font-size: 0.75rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grayMedium};
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Section = styled.section`
  ${({ theme }) => {
    const Mobile = css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 0 0.5rem;

      :first-of-type {
        margin-top: 2.75rem;
      }
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const SectionTitle = styled.h2`
  ${({ theme }) => {
    const Mobile = css`
      font-size: 1.875rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.primary};
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const p = styled.p`
  ${({ theme }) => {
    const Mobile = css`
      margin-top: 0.5rem;

      font-size: 1.25rem;
      font-weight: 300;
      text-align: center;
      color: ${({ theme }) => theme.colors.grayText};
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const hr = styled.hr`
  ${({ theme }) => {
    const Mobile = css`
      width: 10rem;
      height: 1px;
      background: ${({ theme }) => theme.colors.grayLight};

      border: none;

      margin-top: 2rem;
      margin-bottom: 2rem;
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Section1Img = styled(Section1Svg)`
  ${({ theme }) => {
    const Mobile = css`
      margin-top: 0.7rem;
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Section2Img = styled(Section2Svg)`
  ${({ theme }) => {
    const Mobile = css`
      margin-top: 0.7rem;
    `

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`
export const Section3Img = styled(Section3Svg)`
  ${({ theme }) => {
    const Mobile = css``

    const Desktop = css`
      width: 24rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`
