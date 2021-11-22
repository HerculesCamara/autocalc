import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@assets/images/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <div className="img">
          <Image src={logoImg} alt="AutoCalc" />
        </div>
      </Link>
    </HeaderContainer>
  )
}
