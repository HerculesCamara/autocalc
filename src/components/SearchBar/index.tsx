import Image from 'next/image'

import arrowImg from '@assets/images/arrow_forward_24px_outlined.svg'

import { SearchBarContent } from './styles'

export function SearchBar() {
  return (
    <SearchBarContent>
      <input type="text" placeholder="Pesquisar"></input>
      <button>
        <Image src={arrowImg} alt="Pesquisar" />
      </button>
    </SearchBarContent>
  )
}
