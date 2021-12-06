import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'

import {
  Container,
  FooterSobre,
  HeaderSobre,
  SobreContainer
} from '@styles/pages/sobre'

import illustration1 from '@assets/images/illustration1.svg'
import illustration2 from '@assets/images/illustration2.svg'
import illustration3 from '@assets/images/illustration3.svg'
import logoImg from '@assets/images/logo.svg'

const Sobre: NextPage = () => {
  return (
    <>
      <HeaderSobre>
        <Link href="/">
          <Image src={logoImg} alt="AutoCalc" />
        </Link>
        <div className="input">
          <input type="text" placeholder="Pesquise sua fórmula" />
          <button>
            <FaSearch />
          </button>
        </div>
      </HeaderSobre>
      <Container>
        <div>
          <SobreContainer>
            <h1>Sobre nós</h1>

            <section>
              <div className="content">
                <h2>AutoCalc</h2>
                <p>
                  Olá! Somos a AutoCalc, nosso objetivo é compartilhar o melhor
                  do conhecimento matemático e científico.
                </p>
              </div>

              <Image src={illustration1} />
            </section>

            <section>
              <Image src={illustration2} />

              <div className="content">
                <h2>O que fazemos?</h2>
                <p>
                  Aqui te apresentamos as fórmulas matemáticas de forma amigável
                  para facilitar e clarificar o seu entendimento e estudo.
                </p>
              </div>
            </section>

            <section>
              <div className="content">
                <h2>Trabalhe conosco!</h2>
                <p>
                  Faça parte da nosso magnífica equipe e trabalhe com as
                  melhores e mais atuais tecnologias e ferramentas do mercado.
                  Ganhe e compartilhe conhecimento e experiências.
                </p>
              </div>

              <Image src={illustration3} />
            </section>
            <p>“Todo dia é dia de recomeçar evoluir.”</p>
            <button>Quero me candidatar</button>
          </SobreContainer>
        </div>
      </Container>
      <FooterSobre>
        <div className="line"></div>
        <div className="contentFooter">
          <Link href="/">
            <Image src={logoImg} alt="AutoCalc" />
          </Link>
          <Link href="">APOIE-NOS</Link>
          <Link href="">FALE CONOSCO</Link>
          <Link href="">TRABALHE CONOSCO</Link>
          <div className="socials">
            <strong>Siga-nos</strong>
            <div className="socialsLogos">
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
          </div>
        </div>
      </FooterSobre>
    </>
  )
}

export default Sobre
