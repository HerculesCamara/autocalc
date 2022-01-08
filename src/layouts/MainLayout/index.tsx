import Footer from '@/components/Footer'
import Head from 'next/head'
import { ReactNode } from 'react'
import * as S from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.Wrapper>
      <Head>
        <title>Autocalc</title>
      </Head>
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}
