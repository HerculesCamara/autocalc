import Image from 'next/image'

import arrowImg from '@assets/images/arrow_forward_24px_outlined.svg'

import { BackBttContent } from './styles'

export function BackBtt() {
  return (
    <BackBttContent>
      <Image src={arrowImg} alt="Voltar" />
      <label>Voltar</label>
    </BackBttContent>
  )
}
