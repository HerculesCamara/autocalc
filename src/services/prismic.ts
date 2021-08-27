import Prismic from '@prismicio/client'

type CategoryType = {
  id: string
  slug: string | undefined
  title: string
  icon: string
}

export function getPrismicCLient(req?: unknown) {
  const prismic = Prismic.client('https://autocalc.prismic.io/api/v2', {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  return prismic
}

export async function getCategories(): Promise<CategoryType[]> {
  const prismicClient = getPrismicCLient()

  const response = await prismicClient.query(
    Prismic.Predicates.at('document.type', 'categories'),
    { pageSize: 100 }
  )

  const categories: CategoryType[] = response.results.map(category => ({
    id: category.id,
    slug: category.uid,
    title: category.data.title[0].text as string,
    icon: category.data.icon[0].text as string
  }))

  return categories
}
