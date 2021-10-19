import React from 'react';
import log from '../../image/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <ul>
                    <h3>About Green Life</h3>
                    <li><img style={{width:'200px',margin:'10px 0'}} src={log} alt="" /></li>
                    <p>The cosgrove staff members are well trained professionals, We will fax the requested records directly to the qualified doctors the day before or the day of the appointment.</p>
                    <button className='btn-regular'>More Detail <i className="fas fa-caret-right"></i></button>
                </ul>
                <ul>
                    <h3>Departments</h3>
                    <li>Cardiology</li>
                    <li>Neurology</li>
                    <li>Pediatric</li>
                    <li>Dentel Care</li>
                    <li>Urology</li>
                    <li>Pulmonary</li>
                    <li>Х-ray & CT Scan</li>
                </ul>
                <ul>
                    <h3>Latest News & Tips</h3>
                    <li>Cancer treatment for poor peoples
                        02th Dec 2021</li><hr />
                    <li>Hospitality Managements
                        02th Dec 2021</li><hr />
                    <li>Disease based on junk foods
                        02th Dec 2021</li><hr />
                    <li>Disease based on junk foods
                        02th Dec 2021</li>
                </ul>
                <ul>
                    <h3>Contact Details</h3>
                    <li>250 Main Street, Brooklyn, NY 52143, US</li>
                    <li><i className="icon me-1 fas fa-phone-alt"></i> +8809962457</li>
                    <li><i className="icon me-1 fas fa-envelope"></i> healthcare2021@gmail.com</li>
                    <li><i className="icon me-1 fas fa-globe-africa"></i> www.greenlife.com</li>
                
                    <button className='btn-outline-regular mt-3'>Get Map Derection <i className="fas fa-caret-right"></i></button>
                </ul>
            </div>
            <div className='footer-copyright'>
                <p>Copyright &copy; all file reserve by helthcare.com</p>
                <ul className='footer-icon'>
                    <li className='me-2 icon'><i className="fab fa-facebook-square"></i></li>
                    <li className='me-2 icon'><i className="fab fa-twitter-square"></i></li>
                    <li className='me-2 icon'><i className="fab fa-linkedin"></i></li>
                    <li className='me-2 icon'><i className="fab fa-instagram-square"></i></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;