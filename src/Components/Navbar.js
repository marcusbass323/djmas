import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../Assets/logoWHITE.png'
import '../App.css';

export default function NavBar() {
    return (
        <Navbar id="nav" bg="light" expand="lg" fixed="top">
                <Nav className="navigation" >
                <img src={Logo} alt="logo" id="logo"/>
                <Nav.Link className="middle" id="Home">Home</Nav.Link>
                <Nav.Link className="middle">About</Nav.Link>
                <Nav.Link className="middle">Music</Nav.Link>
                <Nav.Link className="middle">Tour/Events</Nav.Link>
                <Nav.Link className="middle">Social Media</Nav.Link>
                <Nav.Link className="middle">Booking Information / Contact</Nav.Link>
                </Nav>
        </Navbar>
    )
}
