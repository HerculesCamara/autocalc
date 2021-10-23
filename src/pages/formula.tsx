import { getPost } from '@services/prismic'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import { BackBtt } from '@components/BackBtt'
import { Header } from '@components/Header'
import { MainCard } from '@components/MainCard'
import { PathUser } from '@components/PathUser'

import { PostContent } from '@styles/pages/formula'

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
          <BackBtt />
          <PostContent>
            <h1>{post.title}</h1>
            {/* <Link href={'/'}>{post.categoryLink}</Link> */}
            <article
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></article>
          </PostContent>
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
