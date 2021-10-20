import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../image/doctor.svg';
import img2 from '../../image/doctor2.svg';

const Summery = () => {
    return (
        <Container>
            <h2 className='my-5 text-muted'>About Health Center</h2>
            <div className='row gy-5 mb-5'>
                <div className='col-md-6 col-12' data-aos='slide-right'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='col-md-6 col-12' data-aos='slide-left'>
                    <h2 className='text-muted'>Achievement</h2>
                    <p style={{textAlign:'justify'}}>
                        The Medical Content department is comprised of top medical writers and editors with in-depth experience in a broad range of disease states. From general health and wellness, to advanced and sophisticated medical conditions, they draw on their medical talents to serve your brand needs. Whether it’s speaking to KOLs, clinical investigators, physicians, pharmacists, nurses, or patients and caregivers, our medical writers can effectively create impactful dialogue for all of your key audience segments.</p>
                    <button className='btn-regular'>Learn More</button>
                </div>
                <div className='col-md-6 col-12' data-aos='fade-up'>
                    <h2 className='text-muted'>More Information</h2>
                    <p style={{ textAlign: 'justify' }}>
                        The Medical Content department is comprised of top medical writers and editors with in-depth experience in a broad range of disease states. From general health and wellness, to advanced and sophisticated medical conditions, they draw on their medical talents to serve your brand needs. Whether it’s speaking to KOLs, clinical investigators, physicians, pharmacists, nurses, or patients and caregivers, our medical writers can effectively create impactful dialogue for all of your key audience segments.</p>
                    <button className='btn-regular'>Learn More</button>
                </div>
                <div className='col-md-6 col-12a' data-aos='fade-up'>
                    <img className='img-fluid' src={img2} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Summery;