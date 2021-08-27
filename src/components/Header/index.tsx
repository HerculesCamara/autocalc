import Image from 'next/image'

import logoImg from '@assets/images/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="img">
        <Image src={logoImg} alt="AutoCalc" />
      </div>
    </HeaderContainer>
  )
}
