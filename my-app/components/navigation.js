import React from 'react'

const Navigation = () => {
  return (
    <nav className='navbar'>
        <i className="menuIcon material-icons">menu</i>
        <ul className="navul format bgcolor">
            <li><a className="aboutMe highlight " href="/index.html"> About me </a></li>
            <li><a className="resume " href="/resume.html"> Resume </a></li>
            <li><a className="portfolio " href="/portfolio.html"> Portfolio </a></li>
            <li><a className="codingChallenges " href="/codingChallenges.html"> Design </a></li>
            <li><a className="contact" href="/contact.html"> Contact </a></li>
        </ul>
    </nav>
  )
}

export default Navigation
