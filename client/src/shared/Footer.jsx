import React from 'react';
import './styles/Footer.css'
import li from '../assets/linkedin.png'
import gh64 from '../assets/gh64.png'
import contact from '../assets/contact.png'

function Footer() {
    return(
        <footer>
            <p className='more'>
            <strong>Built by Yev. More Yev ⇢ </strong> </p>
            <a className='linkedin' href='https://www.linkedin.com/in/yev1/' target='_blank' rel="noopener noreferrer">Let's<img className='linkedin' src={li} alt='li' />Link</a>
            <a className='github' href='https://github.com/yevyork/' target='_blank' rel="noopener noreferrer">Let's<img className='github' src={gh64} alt='gh' />Commit</a>
            <a className='contact-me' href='https://docs.google.com/forms/d/e/1FAIpQLSc9dr_tRDQZcrxGcDVewN37_h02aA6QPg2d4_OQTrv74d2XYQ/viewform' target='_blank' rel="noopener noreferrer">Let's<img className='contact-me' src={contact} alt='gh' />Talk</a>
           
        </footer>
    )
}

export default Footer