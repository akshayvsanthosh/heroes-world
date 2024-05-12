import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo2.png'

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-transparent pt-0">
                <Container style={{ marginLeft: "55px" }}>
                    <Navbar.Brand href=""><img height={"84px"} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="basic-navbar-nav" style={{ backgroundColor: "#ffffff61" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='fw-bolder text-white me-5 ' href="">HOME</Nav.Link>
                            <Nav.Link className='fw-bolder text-white me-5' href="#heroes">HEROES</Nav.Link>
                            <Nav.Link className='fw-bolder text-white me-5' href="#about">ABOUT</Nav.Link>
                            <Nav.Link className='fw-bolder text-white' href="#contact">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
