import Footer from '@/components/Footer'
import * as S from './styles'

const AboutPage = () => {
  return (
    <>
      <S.Header>
        <S.LogoImg />
        <S.SearchBar>
          <S.InputSearchBar placeholder="Pesquise sua Fórmula" />
          <S.BttSearchBar>
            <S.SearchImg />
          </S.BttSearchBar>
        </S.SearchBar>
      </S.Header>

      <S.Container>
        <S.Section>
          <S.Title>Sobre nós</S.Title>
        </S.Section>

        <S.Section>
          <S.TextSection>
            <S.SectionTitle>AutoCalc</S.SectionTitle>
            <S.p>
              Olá! Somos a AutoCalc, nosso objetivo é compartilhar o melhor do
              conhecimento matemático e científico.
            </S.p>
          </S.TextSection>

          <S.Section1Img />
          <S.hr />
        </S.Section>

        <S.Section>
          <S.TextSection>
            <S.SectionTitle>O que fazemos?</S.SectionTitle>
            <S.p>
              Aqui te apresentamos as fórmulas matemáticas de forma amigável para
              facilitar e clarificar o seu entendimento e estudo.
            </S.p>
          </S.TextSection>

          <S.Section2Img />
          <S.hr />
        </S.Section>

        <S.Section>
          <S.TextSection>
            <S.SectionTitle>Trabalhe conosco</S.SectionTitle>
            <S.p>
              Faça parte da nosso magnífica equipe e trabalhe com as melhores e
              mais atuais tecnologias e ferramentas do mercado. Ganhe e
              compartilhe conhecimento e experiências.
            </S.p>
            <S.CulturalText>“Todo dia é dia de recomeçar evoluir.”</S.CulturalText>
          </S.TextSection>
          
          <S.Section3Img />
        </S.Section>

        <S.Section>
          <S.button>Quero me candidatar</S.button>
        </S.Section>
      </S.Container>

      <S.Footer>
        <S.LogoImg />

        <S.FooterPagesWrapper>
          <S.FooterPages>APOIE-NOS</S.FooterPages>
          <S.FooterPages>FALE CONOSCO</S.FooterPages>
          <S.FooterPages>TRABALHE CONOSCO</S.FooterPages>
        </S.FooterPagesWrapper>

        <S.hr/>

        <S.FooterSocialMediasWrapper>
          <S.SpanFooterSocialMedias>Siga-nos</S.SpanFooterSocialMedias>
          <S.FooterSocialMedias>
            <S.InstaLogoImg/>
            <S.LinkedinLogoImg/>
            <S.YoutubeLogoImg/>
          </S.FooterSocialMedias>
        </S.FooterSocialMediasWrapper>
      </S.Footer>
      <Footer />
    </>
  )
}

export default AboutPage
