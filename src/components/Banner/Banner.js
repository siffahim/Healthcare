import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h1 className='fs-1'>What Makes Us Better,<br />
                Makes You Better</h1>
                <p className='bold fs-5'>We have made the most advanced,<br/>
                constumizable & user friendly medical theme in the world.</p>
                <div className='d-flex'>
                    <button className='btn-regular me-4'>Get Started</button>
                    <button className='btn-media'><i class="fas fa-play-circle"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;