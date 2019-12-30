import React from 'react';
import './styles/Footer.css'
import li from '../assets/linkedin.png'
import gh64 from '../assets/gh64.png'

function Footer() {
    return(
        <footer>
            <p className='more'>
            <strong>Built by Yev. More Yev ⇢ </strong> </p>
            <a className='linkedin' href='https://www.linkedin.com/in/yev1/' target='_blank' rel="noopener noreferrer"><img className='linkedin' src={li} alt='li' /></a>
            <a className='github' href='https://github.com/yevyork/' target='_blank' rel="noopener noreferrer"><img className='github' src={gh64} alt='gh' /></a>
           
        </footer>
    )
}

export default Footer