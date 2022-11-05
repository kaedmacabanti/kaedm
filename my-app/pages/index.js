import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profile from '../public/img/profile.png'

import Navigation from '../components/navigation'
import KaedHome from '../components/home'
import Resume from '../components/resume'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div >
      <Head>
        <title>kaedm</title>
        <meta name="portfolio" content="Portfolio website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/250x250.ico" />
      </Head> 
      <Image src={profile} alt='/' className='none' /> 
      <Navigation/>
      <KaedHome/>
      <Resume/>
      <Projects/>
      <Contact/>

      
  
    </div>
  )
}
