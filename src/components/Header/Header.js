import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import logo from '../../image/logo-2.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <>
            <Navbar bg="light" variant="light" className='px-4 header text-center' sticky='top' collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <img style={{width:'160px'}} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} className='item' to="/home">Home</Nav.Link>
                    <Nav.Link as={HashLink} className='item' to="/home#service">Service</Nav.Link>
                    <Nav.Link as={Link} className='item' to="/news">News</Nav.Link>
                    <Nav.Link as={Link} className='item' to="/laboratory">Laboratory</Nav.Link>
                    <Nav.Link as={Link} className='item' to="/link">Link</Nav.Link>
                    <Nav.Link as={Link} className='item' to="/about">About Us</Nav.Link>
                    {
                        user.displayName && <div>
                            <img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }} src={user.photoURL} alt={user.displayName} />
                        </div>
                    }
                    {
                        user.displayName ? <button onClick={logOut} className='btn-fix'>Logout</button> : <Nav.Link as={Link} className='btn-fix' to="/login">Login</Nav.Link>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;