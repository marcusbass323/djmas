import React from 'react';
import {Form,Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Logo from './Assets/xeroKool.png';
import { scroller } from "react-scroll";
import './App.css';

//COMPONENTS
import Head from './Components/Header';
import Music from './Components/Music';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import Events from './Components/Events';
import LiveStream from './Components/LiveStream';
import Footer from './Components/Footer';

function App() {

  function scrollToHome(){
    scroller.scrollTo("Head", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  function scrollToLivestream(){
    scroller.scrollTo("LiveStream", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  function scrollToAbout(){
    scroller.scrollTo("About", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  function scrollToEvents(){
    scroller.scrollTo("Events", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  function scrollToMusic(){
    scroller.scrollTo("MusicContainer", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  function scrollToContact(){
    scroller.scrollTo("Contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const email = "bass.marcus@icloud.com"
  return (
    <div >
      <Navbar id="nav" bg="light" expand="lg">
        <Nav className="navigation" >
          <img src={Logo} alt="logo" id="logo" />
          <Nav.Link className="middle" id="Home" onClick={scrollToHome}>Home</Nav.Link>
          {/* <Nav.Link className="middle" onClick={scrollToLivestream}>Livestream</Nav.Link> */}
          <Nav.Link className="middle" onClick={scrollToAbout}>About</Nav.Link>
          <Nav.Link className="middle" onClick={scrollToMusic}>Music</Nav.Link>
          <Nav.Link className="middle" onClick={scrollToEvents}>Tour/Events</Nav.Link>
          <Nav.Link className="middle" onClick={scrollToAbout}>Social Media</Nav.Link>
          <Form action="mailto:dj.xerokool@gmail.com" method="get" enctype="text/plain">
          <button type="submit" className="middle" >Booking Information / Contact</button>
          </Form>
        </Nav>
      </Navbar>
      <Head />
        <About />
        <Events />
      <Music />
      <Footer />
    </div>
  );
}

export default App;
