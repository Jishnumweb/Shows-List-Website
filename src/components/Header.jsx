import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="mainNav navbar-dark fixed-top">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold' id='quonsah'>QUONSAH</Navbar.Brand>
                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navlinksmain">
                            <Link className='navlinks'>HOME</Link>
                            <Link to={"/movies"} className='navlinks'>MOVIES</Link>
                            <Link to={"/series"} className='navlinks'>SERIES</Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
