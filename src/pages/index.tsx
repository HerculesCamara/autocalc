import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { MathFormatter } from '../components/MathFormatter';
import { getPrismicCLient } from '../services/prismic';

import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom';

interface HomeProps {
  posts: [{
    slug: string;
    title: string;
    content: string
  }]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const mathCode = posts[0].content.split('#math').pop()?.split('#endmath')[0] || ""

  console.log(mathCode);


  return (
    <div className={styles.container}>
      <h1>{posts[0].title}</h1>
      <MathFormatter mathCode={mathCode} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getPrismicCLient().query([
    Prismic.predicates.at('document.type', 'posts')
  ], {
    fetch: ['posts.title', 'posts.content'],
    pageSize: 100
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      content: RichText.asText(post.data.content)
    }
  })



  return {
    props: {
      posts
    }
  }
}

export default Home
