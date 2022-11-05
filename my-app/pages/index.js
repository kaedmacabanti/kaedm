import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/navigation'
import KaedHome from '../components/home'
import Resume from '../components/resume'
import Projects from '../components/projects'

export default function Home() {
  return (
    <div >
      <Head>
        <title>kaedm</title>
        <meta name="portfolio" content="Portfolio website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/250x250.ico" />
      </Head> 
      <Navigation/>
      <KaedHome/>
      {/* <Resume/> */}
      <Projects/>

      
  
    </div>
  )
}
