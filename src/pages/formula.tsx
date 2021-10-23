import { getPost } from '@services/prismic'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { Header } from '@components/Header'
import { MainCard } from '@components/MainCard'
import { PathUser } from '@components/PathUser'

interface FormulaProps {
  post: {
    id: string
    slug: string | undefined
    title: string
    categoryLink: string
    content: string
  }
}

const Formula: NextPage<FormulaProps> = ({ post }) => {
  return (
    <>
      <Header />
      <main>
        <MainCard>
          <PathUser />
          <h1>{post.title}</h1>
          <Link href={'/'}>{post.categoryLink}</Link>
          <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
        </MainCard>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getPost()

  return {
    props: { post }
  }
}

export default Formula
