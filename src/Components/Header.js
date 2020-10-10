import React from 'react'
import HeaderPic from '../Assets/djmas.png'
import HeaderCarousel from './Carousel'

export default function Head() {
    return (
        <div className="Head">
            <img src={HeaderPic} alt="" style={{width: '100vw'}}/>
        </div>
    )
}
