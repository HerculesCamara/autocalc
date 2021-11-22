import { getCategories } from '@services/prismic'
import { GetStaticProps, NextPage } from 'next'

import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { MainCard } from '@components/MainCard'
import { Paginator } from '@components/Paginator'
import { PathUser } from '@components/PathUser'
import { SearchBar } from '@components/SearchBar'

import { CardsContainer, MateriasContent } from '@styles/pages/materias'

type CategoryType = {
  id: string
  slug: string | undefined
  title: string
  icon: string
}

interface MateriasProps {
  categories: CategoryType[]
}
const Materias: NextPage<MateriasProps> = ({ categories }) => {
  return (
    <MateriasContent>
      <Header />
      <main>
        <MainCard>
          <PathUser />
          <SearchBar />
          <CardsContainer>
            {categories.map(category => (
              <Card key={category.id}>
                <div
                  className="icon"
                  dangerouslySetInnerHTML={{ __html: category.icon }}
                ></div>

                <h4>{category.title}</h4>
              </Card>
            ))}
          </CardsContainer>
          <Paginator />
        </MainCard>
      </main>
    </MateriasContent>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getCategories()

  return {
    props: { categories }
  }
}

export default Materias
