import React from 'react';
import './styles/Resume.css'
import resume from '../assets/yev.png'

function Resume() {
    return(
        <div className="resume-main-container">
            <img className='res-pic' 
            src={resume} alt='wow' />
        </div>
    )
}

export default Resume