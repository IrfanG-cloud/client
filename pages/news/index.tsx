import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'

export default function News() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <div className="container">
        <Header />
        <h1>News</h1>
        <Footer />
      </div>
    </>
  )
}