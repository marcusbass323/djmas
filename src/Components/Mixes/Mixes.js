import React from 'react';
import ReactPlayer from 'react-player'

export default function Music() {

    return (
        <div className="MusicContainer">
            <h1 id="musicHeader" className="headerTitle">Music</h1>
            <div id="Music">
            <div className="wrapper">
            <ReactPlayer 
            className="player" 
            url='https://youtu.be/NEO1OzOs3A4' 
            width='100%'
            height='100%'
            />
            </div>


            <div className="wrapper">
            <ReactPlayer 
            className="player" 
            url="https://youtu.be/kDFJlEOZzG8" 
            width='100%'
            height='100%'
            />
            </div>

            <div className="wrapper">
            <ReactPlayer 
            className="player" 
            url="https://youtu.be/YyXC-EKfqoI" 
            width='100%'
            height='100%'
            />
            </div>

            <div className="wrapper">
            <ReactPlayer 
            className="player" 
            url="https://youtu.be/A7FJIGZDgdU" 
            width='100%'
            height='100%'
            />
            </div>

            </div>
        </div>

    )
}


