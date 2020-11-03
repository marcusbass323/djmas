import React from 'react'
import { Form, Navbar, Nav, Button} from 'react-bootstrap';
import { scroller } from "react-scroll";
import './HeaderNav.css';

export default function HeaderNav() {

    function scrollToHome() {
        scroller.scrollTo("Home", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    function scrollToAbout() {
        scroller.scrollTo("About", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    function scrollToEvents() {
        scroller.scrollTo("Events", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    function scrollToMusic() {
        scroller.scrollTo("MusicContainer", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    // function scrollToContact() {
    //     scroller.scrollTo("Contact", {
    //         duration: 800,
    //         delay: 0,
    //         smooth: "easeInOutQuart",
    //     });
    // };

    return (
        <div className="Home">
             <Navbar bg="dark" expand="lg" fixed="top" id="navbar">
                <Navbar.Brand href="#home">
                    <div>
                        <div id="navTitle">DJ M.A.S.</div>
                        <div>
                            <span><a href="http://instagram.com/iamdjmas" target="blank"><i class="fab fa-instagram"></i></a></span>
                            <span><a href="https://www.facebook.com/iamdjmas" target="blank"><i class="fab fa-facebook"></i></a></span>
                            <span><a href="https://youtube.com/channel/UCSFWiHIkkvJOeaolqEQSBRA" target="blank"><i class="fab fa-youtube"></i></a></span>
                            <span><a href="https://www.mixcloud.com/djxerokool/" target="blank"><i class="fab fa-mixcloud"></i></a></span>
                            <span><a href="https://soundcloud.com/user-378595979-620999499" target="blank"><i class="fab fa-soundcloud"></i></a></span>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav" onClick={scrollToHome}><div className="nav">Home</div></Nav.Link>
                        <Nav.Link className="nav"><div className="nav">Livestream</div></Nav.Link>
                        <Nav.Link className="nav" onClick={scrollToAbout}><div className="nav">About</div></Nav.Link>
                        <Nav.Link className="nav" onClick={scrollToMusic}><div className="nav">Mixes</div></Nav.Link>
                        <Nav.Link className="nav" onClick={scrollToEvents}><div className="nav">Events</div></Nav.Link>
                        <Nav.Link className="nav" onClick={scrollToAbout}><div className="nav">Social</div></Nav.Link>
                    </Nav>
                    <Form inline action="mailto:iamdjmas@gmail.com" method="get" enctype="text/plain">
                        <Button type="submit" variant="outline-success">Booking Information | Contact</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
