import React from 'react';
import img from '../../image/banner (1).png';
import './Demand.css';

const Demand = () => {
    return (
        <div className='info-container'>
            <img className='img-fluid' src={img} alt="" />
            <div className='containr-trainer'>
                <div className='info-text'>
                    <div className='bg-icon'>
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <h5>Responsive Layout</h5>
                        <p>The Medical Content department is comprised of top medical</p>
                    </div>
                </div>
                <div className='info-text'>
                    <div className='bg-icon'>
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div>
                        <h5>BMI & IWC Calculator</h5>
                        <p>The Medical Content department is comprised of top medical</p>
                    </div>
                </div>
                <div className='info-text'>
                    <div className='bg-icon'>
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <div>
                        <h5>Premium Plugins Free</h5>
                        <p>The Medical Content department is comprised of top medical</p>
                    </div>
                </div>
                <div className='info-text'>
                    <div className='bg-icon'>
                        <i class="fas fa-coins"></i>
                    </div>
                    <div>
                        <h5>Free Customer Support</h5>
                        <p>The Medical Content department is comprised of top medical</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demand;