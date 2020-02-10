import React from 'react';
import './styles/NotFound.css'
import { Link } from 'react-router-dom'


function NotFound() {
    return(
        <div className='notfound-text-container'>
            <Link to='/' className='back-button'>Back</Link>
                       <div className='row404'>
                       
            <p className='notfound four5'>404</p>
            <p className= 'notfound zero3'>404</p>
            <p className='notfound four6'>404</p>
            </div>
                        <div className='column404'>
            <p className='notfound1 four3'>404</p>
            <p className= 'notfound1 zero2'>This doesn't always have to be an unpleasant experience,</p>
            <p className='zero2'>✆¯\_(ツ)_/¯☡ </p>
            <p className='notfound1 four4'>but the page you were looking for just doesn't exist.</p>
            </div>
            <div className='row404'>
            <p className='notfound four1'>404</p>
            <p className= 'notfound zero'>404</p>
            <p className='notfound four2'>404</p>
            
            </div>

            {/* <p className='intentional'>I..I...I just wanted you to check out my 404 page! <br></br><br></br>I swear, this was intentional!</p> */}
            
        </div>
    )
}

export default NotFound