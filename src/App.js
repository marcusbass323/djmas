import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//COMPONENTS
import Mixes from './Components/Mixes/Mixes';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import Carousel from './Components/Carousel/Carousel';

function App() {

  return (
    <div >
      <HeaderNav />
      <Carousel />
      <About  />
      <Events />
      <Mixes />
      <Footer /> 
    </div>
  );
}

export default App;
