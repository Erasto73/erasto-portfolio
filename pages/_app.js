import '@/styles/globals.css'
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
   
  return (
     <>
      <Head>
        <title>Erasto portfolio</title>
        <meta name="google-site-verification" content="1QhiHbTHYjvyhyQ7dQ6-dwLmSnrIoNxCXD-YVa-SzNk" />
        <meta name = "description" content = "erasto technical portfolio" />
        <link rel = "icon" href = "/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
