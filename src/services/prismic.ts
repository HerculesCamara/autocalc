import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

type CategoryType = {
  id: string
  slug: string | undefined
  title: string
  icon: string
}

type PostType = {
  id: string
  slug: string | undefined
  title: string
  categoryLink: string
  content: string
}

export function getPrismicCLient(req?: unknown) {
  const prismic = Prismic.client('https://autocalcforms.prismic.io/api/v2', {
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

export async function getPost(): Promise<PostType> {
  const prismicClient = getPrismicCLient()

  const response = await prismicClient.query(
    Prismic.Predicates.at('document.type', 'posts'),
    { pageSize: 1 }
  )

  const post: PostType = response.results.map(post => {
    console.log(post)

    return {
      id: post.id,
      slug: post.uid,
      title: RichText.asText(post.data.title),
      categoryLink: post.data.category_link.slug,
      content: RichText.asHtml(post.data.content)
    }
  })[0]

  /* console.log(response.results[0].data) */

  return post
}
