import React from 'react'

const Navigation = () => {
  return (
    <nav className='navbar'>
        <i className="menuIcon material-icons">menu</i>
        <ul className="navul format bgcolor">
            <li><a className="aboutMe navtext"> About me </a></li>
            <li><a className="resume navtext"> Resume </a></li>
            <li><a className="portfolio navtext"> Portfolio </a></li>
            <li><a className="codingChallenges navtext"> Design </a></li>
            <li><a className="contact navtext"> Contact </a></li>
        </ul>
    </nav>
  )
}

export default Navigation
