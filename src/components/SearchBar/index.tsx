import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import * as S from './styles'

interface SearchBarProps {
  handleDataFilter?: (e: string) => void
}

const SearchBar = ({ handleDataFilter }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('')

  const fetchData = useCallback(() => {
    if (searchText && searchText.length > 3) {
      handleDataFilter && handleDataFilter(searchText)
    }
  }, [searchText, handleDataFilter])

  useEffect(() => {
    const timer = setTimeout(fetchData, 1000)

    return () => clearTimeout(timer)
  }, [fetchData, searchText])

  return (
    <S.Wrapper>
      <S.Input
        placeholder="Pesquise sua Fórmula"
        value={searchText}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchText(event.target.value)
        }
      />

      <S.Button onClick={fetchData}>
        <FaSearch />
      </S.Button>
    </S.Wrapper>
  )
}

export default SearchBar
