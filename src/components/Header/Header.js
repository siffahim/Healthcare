import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../image/logo-2.png';

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" className='px-5 text-center' sticky='top' collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <img style={{width:'160px'}} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
                    <Nav.Link as={Link} to="/laboratory">Laboratory</Nav.Link>
                    <Nav.Link as={Link} to="/news">News</Nav.Link>
                    <Nav.Link as={Link} to="/link">Link</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;