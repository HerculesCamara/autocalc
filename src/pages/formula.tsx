import { NextPage } from 'next'
import React from 'react'

import { Header } from '@components/Header'
import { MainCard } from '@components/MainCard'
import { PathUser } from '@components/PathUser'

const Formulas: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainCard>
          <PathUser />
        </MainCard>
      </main>
    </>
  )
}

export default Formulas
