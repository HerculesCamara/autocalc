import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

import { MainCard } from '@components/MainCard'

import { HomeContainer } from '@styles/pages/home'

import logoImg from '@assets/images/logo.svg'

const Home: NextPage = () => {
  return (
    <main>
      <MainCard>
        <HomeContainer>
          <div className="img">
            <Image src={logoImg} alt="AutoCalc" />
          </div>
          <div className="input">
            <input type="text" placeholder="Pesquise sua fórmula" />
            <button>
              <FaSearch />
            </button>
          </div>
          <a href="">Ver matérias</a>
          <a href="">O que é isso?</a>
        </HomeContainer>
      </MainCard>
    </main>
  )
}

export default Home
