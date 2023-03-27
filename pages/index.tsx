import type { NextPage } from 'next'
import Head from 'next/head'
import PageFooter from '@/components/page.footer'
import PageLayout from '@/components/page.layout'
import PageNavbar from '@/components/page.navbar'
import YesNoAxiosExample from "@/components/yes-no.axios.example";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta name="description" content="NextJS boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageNavbar/>

      <PageLayout>
        <h1>Fill out the contents!</h1>
        <YesNoAxiosExample/>
      </PageLayout>

      <PageFooter/>
    </div>
  )
}

export default Home
