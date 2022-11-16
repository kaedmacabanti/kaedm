import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profile from '../public/img/profile.png'
import Navigation from '../components/navigation'
import Aboutme from '../components/aboutme' 
import Skillcontainer from '../components/skills'
import Featuredproj from '../components/featuredproj'
import Projects from '../components/projects'
import Contact from '../components/contact' 
import Footer from '../components/footer'

export default function Home() {
  return (
    <body >
      <Head>
        <title>kaedm</title>
        <meta name="portfolio" content="Portfolio website" /> 
        <link rel="icon" href="/250x250.ico" />
      </Head> 

      <Image src={profile} alt='/' className='none' /> 
      <Navigation/>

      <div className='primarycontainer'>
        <Aboutme/> 
        {/* <Skillcontainer/> */}
        <Featuredproj/>
        <Projects/>
        {/* <Contact/>  */}

      </div>

      <Footer/>

    </body>
  )
}
