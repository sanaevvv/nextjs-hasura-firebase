import { Auth } from '../components/Auth'
import { Layout } from '../components/Layout'
import { GetStaticProps } from 'next'
import { dehydrate } from 'react-query/hydration'
import { QueryClient, useQueryClient } from 'react-query'
import { fetchNews } from '../hooks/useQueryNews'
import { News } from '../types/types'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<News[]>('news')
  return (
    <Layout title="Home">
      <p>News list by SSG</p>
      {data?.map((news) => (
        <p key={news.id}>{news.content}</p>
      ))}
      <Auth />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('news', fetchNews)
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  }
}
