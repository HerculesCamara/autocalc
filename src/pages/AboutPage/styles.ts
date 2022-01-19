import styled, { css } from 'styled-components'

import LogoSvg from '@/assets/logo.svg'
import SearchSvg from '@/assets/search.svg'
import Section1Svg from '@/assets/about-us1.svg'
import Section2Svg from '@/assets/about-us2.svg'
import Section3Svg from '@/assets/about-us3.svg'
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { Fragment } from 'react'

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
      height: 8.75rem;

      padding: 0 5rem;

      display: flex;
      justify-content: space-between;

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
      width: 13.75rem;
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
      width: auto;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-between;
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

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const SearchImg = styled(SearchSvg)`
  ${({ theme }) => {
    const Mobile = css``

    const Desktop = css``

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Container = styled.main`
  ${({ theme }) => {
    const Mobile = css`
      width: 100%;

      background: ${({ theme }) => theme.colors.white};

      padding: 0 3rem;
      padding-top: 1.5rem;
      padding-bottom: 5rem;

      display: flex;
      flex-direction: column;
      align-items: center;
    `

    const Desktop = css`
      width: 100%;

      display: flex;
      flex-direction: column;

      align-items: center;

      padding: 0 2rem;
      padding-bottom: 6.25rem;

      background: ${({ theme }) => theme.colors.white};
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

      align-self: flex-start;
    `

    const Desktop = css`
      width: 100%;
      max-width: 74.5rem;

      margin-top: 2.5rem;

      font-size: 1.5rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grayMedium};

      text-align: left;
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

      margin-top: 0 !important;

      :nth-of-type(2) {
        margin-top: 2.75rem !important;
      }
    `

    const Desktop = css`
      width: 100%;
      max-width: 74.5rem;

      gap: 2rem;

      padding: 0 1.25rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 0;

      :first-child {
        padding-left: 0;
      }

      :nth-of-type(3) {
        flex-direction: row-reverse;

        text-align: right;
      }

      :nth-child(1n + 3):not(:last-child) {
        margin-top: 5rem;
      }

      :last-of-type {
        margin-top: 0.5rem;
      }
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const TextSection = styled.div`
  ${({ theme }) => {
    const Mobile = css``

    const Desktop = css``

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const SectionTitle = styled.h2`
  ${({ theme }) => {
    const Mobile = css`
      font-size: 1.875rem;
      font-weight: 400;
      text-align: center;
      color: ${({ theme }) => theme.colors.primary};
    `

    const Desktop = css`
      font-size: 2.25rem;
      font-weight: 400;

      color: ${({ theme }) => theme.colors.primary};
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
      max-width: 28.5rem;

      margin-top: 1.25rem;

      font-size: 1.5rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grayText};
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
      display: none;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Section1Img = styled(Section1Svg)`
  ${({ theme }) => {
    const Mobile = css`
      width: 17rem;
      margin-top: 0.7rem;
    `

    const Desktop = css`
      width: 31.5rem;
      height: 20rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Section2Img = styled(Section2Svg)`
  ${({ theme }) => {
    const Mobile = css`
      width: 15.75rem;
      margin-top: 0.7rem;
    `

    const Desktop = css`
      width: 22.75rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Section3Img = styled(Section3Svg)`
  ${({ theme }) => {
    const Mobile = css`
      width: 14.25rem;
    `

    const Desktop = css`
      width: 26.25rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const CulturalText = styled.p`
  ${({ theme }) => {
    const Mobile = css`
      font-size: 1rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grayText};
      text-align: center;

      margin-top: 1rem;
    `

    const Desktop = css`
      font-size: 1.25rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grayText};

      margin-top: 1.75rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const button = styled.button`
  ${({ theme }) => {
    const Mobile = css`
      width: 16rem;
      height: 3rem;

      margin-top: 1rem;

      font-size: 1.125rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.white};

      background: ${({ theme }) => theme.colors.primary};

      border: none;
      border-radius: 6.25rem;
    `

    const Desktop = css`
      width: 26.4rem;
      height: 4.5rem;

      align-self: flex-start;

      font-size: 1.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.white};

      background: ${({ theme }) => theme.colors.primary};

      border: none;
      border-radius: 6.25rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const Footer = styled.footer`
  ${({ theme }) => {
    const Mobile = css`
      width: 100%;

      padding-top: 1.5rem;
      padding-bottom: 1.5rem;

      border-top: solid 1px ${({ theme }) => theme.colors.grayLight};

      background: ${({ theme }) => theme.colors.white};

      display: flex;
      flex-direction: column;
      align-items: center;

      ${LogoImg} {
        width: 9.125rem;
      }

      ${hr} {
        width: 3.75rem;

        margin-top: 1rem;
        margin-bottom: 0;
      }
    `

    const Desktop = css`
      width: 100%;
      height: 8.5rem;

      padding: 0 5rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      background: ${({ theme }) => theme.colors.white};

      border-top: solid 1px ${({ theme }) => theme.colors.grayLight};

      ${LogoImg} {
        width: 10.5rem;
      }
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const FooterPagesWrapper = styled.div`
  ${({ theme }) => {
    const Mobile = css`
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.grayText};

      display: flex;
      flex-direction: column;

      cursor: pointer;
    `

    const Desktop = css`
      width: 100%;
      max-width: 41.5rem;
      cursor: pointer;

      display: flex;
      justify-content: space-between;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const FooterPages = styled.a`
  ${({ theme }) => {
    const Mobile = css`
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.grayText};
      text-align: center;

      :first-of-type {
        margin-top: 1.375rem;
      }

      & + & {
        margin-top: 1rem;
      }

      cursor: pointer;
    `

    const Desktop = css`
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.grayText};
      cursor: pointer;
    `

    return theme.isMobile ? Mobile : Desktop
  }}

  transition: all 0.2s;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const FooterSocialMediasWrapper = styled.div`
  ${({ theme }) => {
    const Mobile = css``

    const Desktop = css`
      display: block;
      margin-bottom: 0.7rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const SpanFooterSocialMedias = styled.span`
  ${({ theme }) => {
    const Mobile = css`
      display: none;
    `

    const Desktop = css`
      font-size: 0.625rem;
      color: ${({ theme }) => theme.colors.grayText};
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const FooterSocialMedias = styled.div`
  ${({ theme }) => {
    const Mobile = css`
      display: flex;

      margin-top: 1rem;

      gap: 1rem;
    `

    const Desktop = css`
      width: 100%;
      max-width: 7rem;

      display: flex;
      gap: 0.5rem;

      margin-top: 0.4rem;
    `

    return theme.isMobile ? Mobile : Desktop
  }}
`

export const InstaLogoImg = styled(FaInstagram)`
  ${({ theme }) => {
    const Mobile = css`
      width: 2rem;
      height: 2rem;

      fill: ${({ theme }) => theme.colors.grayLight};
    `

    const Desktop = css`
      width: 2rem;
      height: 2rem;

      fill: ${({ theme }) => theme.colors.grayLight};
    `

    return theme.isMobile ? Mobile : Desktop
  }}

  transition: all 0.2s;

  :hover {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

export const LinkedinLogoImg = styled(FaLinkedin)`
  ${({ theme }) => {
    const Mobile = css`
      width: 2rem;
      height: 2rem;

      fill: ${({ theme }) => theme.colors.grayLight};
    `

    const Desktop = css`
      width: 2rem;
      height: 2rem;

      fill: ${({ theme }) => theme.colors.grayLight};
    `

    return theme.isMobile ? Mobile : Desktop
  }}

  transition: all 0.2s;

  :hover {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

export const YoutubeLogoImg = styled(FaYoutube)`
  ${({ theme }) => {
    const Mobile = css`
      width: 2rem;
      height: 2rem;

      fill: ${({ theme }) => theme.colors.grayLight};
    `

    const Desktop = css`
      width: 2rem;
      height: 2rem;

      fill: ${({ theme }) => theme.colors.grayLight};
    `

    return theme.isMobile ? Mobile : Desktop
  }}

  transition: all 0.2s;

  :hover {
    fill: ${({ theme }) => theme.colors.primary};
  }
`
