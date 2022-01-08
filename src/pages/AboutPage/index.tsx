import * as S from './styles'

const AboutPage = () => {
  return (
    <S.Header>
      <S.LogoImg />
      <S.SearchBar>
        <S.InputSearchBar placeholder="Pesquise sua Fórmula" />
        <S.BttSearchBar>
          <S.SearchImg />
        </S.BttSearchBar>
      </S.SearchBar>
    </S.Header>
  )
}

export default AboutPage
