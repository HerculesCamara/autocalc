import { NextPage } from 'next'

import { Header } from '@components/Header'
import { MainCard } from '@components/MainCard'

const Materias: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainCard>OPA</MainCard>
      </main>
    </>
  )
}

export default Materias
