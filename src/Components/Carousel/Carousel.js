import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

//IMAGES
import Carousel1 from '../../Assets/3.png';
import Carousel2 from '../../Assets/2.png';
import Carousel3 from '../../Assets/1.png';
import Carousel4 from '../../Assets/4.png';
import Carousel5 from '../../Assets/5.png';


export default class HeaderCarousel extends React.Component {
    render() {
        return (
            <div id="Container">
                <Carousel
                >
                    <Carousel.Item className="carouselContainer">
                        <img
                            className="d-block w-100 carouselImg"
                            src={Carousel1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselContainer">
                        <img
                            className="d-block w-100 carouselImg"
                            src={Carousel2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselContainer">
                        <img
                            className="d-block w-100 carouselImg"
                            src={Carousel3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carouselContainer">
                        <img
                            className="d-block w-100 carouselImg"
                            src={Carousel4}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Carousel.Item className="carouselContainer">
                        <img
                            className="d-block w-100 carouselImg"
                            src={Carousel5}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
            </div>

        )
    }
}
