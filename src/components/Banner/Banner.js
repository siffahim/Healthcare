
import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../image/doctor3.svg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container text-white'>
            <Container>
                <div className='row gx-2 gy-5 d-flex align-items-center pt-5'>
                    <div className='col-md-6 col-12' data-aos="fade-up">
                        <p>Healthcare & madical center</p>
                        <h2>Green Life</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className='d-flex'>
                            <button className='btn-regular'>Make Appointment</button>
                            <button className='btn-media ms-4'><i class="fas fa-play-circle"></i></button>
                        </div>
                    </div>
                    <div className='col-md-6 col-12' data-aos="fade-up">
                        <img className='img-fluid image-aniamtion'  src={banner} alt="" />
                    </div>
                </div>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
                <path fill="#16ce67" fill-opacity="1" d="M0,224L1440,96L1440,320L0,320Z"></path>
            </svg>
        </div>
    );
};

export default Banner;