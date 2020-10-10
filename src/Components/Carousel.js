import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

//IMAGES
import Carousel1 from '../Assets/djmas.png';
import Carousel2 from '../Assets/mas1.png';
import Carousel3 from '../Assets/mas2.png';
import Carousel4 from '../Assets/mas3.png';


export default class HeaderCarousel extends React.Component {
    render() {
        return (
            <div>
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
            </div>

        )
    }
}
