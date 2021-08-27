import { getCategories } from '@services/prismic'
import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import { MainCard } from '@components/MainCard'

type CategoryType = {
  id: string
  slug: string | undefined
  title: string
  icon: {
    dimensions: { width: number; height: number }
    alt: string
    url: string
  }
}

interface MateriasProps {
  categories: CategoryType[]
}
const Materias: NextPage<MateriasProps> = ({ categories }) => {
  return (
    <main>
      <MainCard>
        {categories.map(category => (
          <div key={category.id}>
            {category.title}
            <Image
              src={category.icon.url}
              width={category.icon.dimensions.width}
              height={category.icon.dimensions.height}
            />
          </div>
        ))}
      </MainCard>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getCategories()

  return {
    props: { categories }
  }
}

export default Materias
