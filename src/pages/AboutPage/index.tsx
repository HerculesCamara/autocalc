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
        <S.Title>Sobre nós</S.Title>
        <S.Section>
          <S.SectionTitle>AutoCalc</S.SectionTitle>
          <S.p>
            Olá! Somos a AutoCalc, nosso objetivo é compartilhar o melhor do
            conhecimento matemático e científico.
          </S.p>
          <S.Section1Img />
          <S.hr />
        </S.Section>
        <S.Section>
          <S.SectionTitle>O que fazemos?</S.SectionTitle>
          <S.p>
            Aqui te apresentamos as fórmulas matemáticas de forma amigável para
            facilitar e clarificar o seu entendimento e estudo.
          </S.p>
          <S.Section2Img />
          <S.hr />
        </S.Section>
        <S.Section>
          <S.SectionTitle>Trabalhe conosco</S.SectionTitle>
          <S.p>
            Faça parte da nosso magnífica equipe e trabalhe com as melhores e
            mais atuais tecnologias e ferramentas do mercado. Ganhe e
            compartilhe conhecimento e experiências.
          </S.p>
          <S.Section3Img />
        </S.Section>
      </S.Container>
    </>
  )
}

export default AboutPage
