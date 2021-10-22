import { NextPage } from 'next'

import { Header } from '@components/Header'
import { MainCard } from '@components/MainCard'
import { SearchBar } from '@components/SearchBar'

const Materias: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainCard> Salve</MainCard>
      </main>
    </>
  )
}

export default Materias
