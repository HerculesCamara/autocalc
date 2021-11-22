import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

import { HomeContainer, HomeCard } from '@styles/pages/home'

import logoImg from '@assets/images/logo.svg'

const Home: NextPage = () => {
  return (
    <main>
      <HomeCard>
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
          <a href="/materias">Ver matérias</a>
          <a href="">O que é isso?</a>
        </HomeContainer>
      </HomeCard>
    </main>
  )
}

export default Home
