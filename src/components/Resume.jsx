import React from 'react';
import './styles/Resume.css'
import resume from '../assets/yev.pdf'

function Resume() {
    return(
        <div className="resume-main-container">
            <object data={resume} title='wow'width='300px' height="700px"></object>
        </div>
    )
}

export default Resume