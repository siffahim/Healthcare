import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../image/Error_404.png';
const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={error} alt="" /><br/>
            <Link to='/home'>
                <button className='btn-regular my-4'>Go Back</button>
            </Link>
            <p>Check your <span style={{color:'blue',marginTop:'10px'}}>internet connetion</span></p>
        </div>
    );
};

export default NotFound;