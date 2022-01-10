import styled from 'styled-components'

import LogoSvg from '@/assets/logo.svg'

export const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};

  animation: fadeOut 4s ease-in-out;

  visibility: hidden;
  opacity: 0;

  @keyframes fadeOut {
    0% {
      visibility: visible;
      opacity: 1;
    }

    50% {
      visibility: visible;
      opacity: 1;
    }

    60% {
      visibility: visible;
      opacity: 0;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  transform: translateY(-50%);
  width: 100%;
  padding: 4rem;
`

export const Logo = styled(LogoSvg)`
  width: 100%;
  max-width: 458px;
`

export const Loadbar = styled.div`
  width: 90%;
  max-width: 20rem;
  height: 0.75rem;
  border-radius: 90px;
  background-color: #eeeeee;
  transform: translateY(-50%);
  margin: 0 1rem;
  position: relative;
  overflow: hidden;

  :after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: red;
    border-radius: 90px;
    animation: borealisBar 2s ease-in-out;
  }

  @keyframes borealisBar {
    0% {
      left: 0%;
      right: 100%;
      width: 0%;
    }

    100% {
      right: 0%;
      left: 0%;
      width: 100%;
    }
  }
`
