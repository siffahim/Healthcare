import React from 'react';
import { Container } from 'react-bootstrap';
import banner2 from '../../image/01.jpg';
import banner3 from '../../image/02.jpg';
import banner4 from '../../image/03.jpg';
import banner from '../../image/about.jpg';
const About = () => {
    return (
        <Container>
            <h2 className='text-center my-5 text-muted'>OUR LASTEST NEWS</h2>
            <div className='row gy-5 mb-5'>
                <div className='col-md-6 col-12'>
                    <img className='img-fluid' src={banner} alt="" />
                </div>
                <div className='col-md-6 col-12'>
                    <h5>AREAS OF SPECIALITY</h5>
                    <p>
                        The Medical Content department is comprised of top medical writers and editors with in-depth experience in a broad range of disease states. From general health and wellness, to advanced and sophisticated medical conditions, they draw on their medical talents to serve your brand needs. Whether it’s speaking to KOLs, clinical investigators, physicians, pharmacists, nurses, or patients and caregivers, our medical writers can effectively create impactful dialogue for all of your key audience segments.</p>
                    <button className='btn-regular'>Learn More</button>
                </div>
                <div className='col-md-6 col-12'>
                    <h5>WHAT MAKES US UNIQUE</h5>
                    <p>
                        The Medical Content department is comprised of top medical writers and editors with in-depth experience in a broad range of disease states. From general health and wellness, to advanced and sophisticated medical conditions, they draw on their medical talents to serve your brand needs. Whether it’s speaking to KOLs, clinical investigators, physicians, pharmacists, nurses, or patients and caregivers, our medical writers can effectively create impactful dialogue for all of your key audience segments.</p>
                    <button className='btn-regular'>Learn More</button>
                </div>
                <div className='col-md-6 col-12'>
                    <img className='img-fluid' src={banner2} alt="" />
                </div>
                <div className='col-md-6 col-12'>
                    <img className='img-fluid' src={banner3} alt="" />
                </div>
                <div className='col-md-6 col-12'>
                    <h5>MEDICAL CONTENT</h5>
                    <p>
                        The Medical Content department is comprised of top medical writers and editors with in-depth experience in a broad range of disease states. From general health and wellness, to advanced and sophisticated medical conditions, they draw on their medical talents to serve your brand needs. Whether it’s speaking to KOLs, clinical investigators, physicians, pharmacists, nurses, or patients and caregivers, our medical writers can effectively create impactful dialogue for all of your key audience segments.</p>
                    <button className='btn-regular'>Learn More</button>
                </div>
                <div className='col-md-6 col-12'>
                    <h5>AREAS OF SPECIALITY</h5>
                    <p>
                        The Medical Content department is comprised of top medical writers and editors with in-depth experience in a broad range of disease states. From general health and wellness, to advanced and sophisticated medical conditions, they draw on their medical talents to serve your brand needs. Whether it’s speaking to KOLs, clinical investigators, physicians, pharmacists, nurses, or patients and caregivers, our medical writers can effectively create impactful dialogue for all of your key audience segments.</p>
                    <button className='btn-regular'>Learn More</button>
                </div>
                <div className='col-md-6 col-12'>
                    <img className='img-fluid' src={banner4} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default About;