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
            url='https://www.youtube.com/watch?v=A7FJIGZDgdU' 
            width='100%'
            height='100%'
            />
            </div>
            <div className="wrapper">
            <ReactPlayer 
            className="player" 
            url="https://youtu.be/uBnK0gxVG2s" 
            width='100%'
            height='100%'
            />
            </div>
            <div className="wrapper">
            <ReactPlayer 
            className="player" 
            url='https://www.youtube.com/watch?v=meXCcayQXTw' 
            width='100%'
            height='100%'
            />
            </div>
            <div className="wrapper">
            <ReactPlayer 
            className="player" 
            url="https://www.youtube.com/watch?v=ZyhnxhorHQQ&t=36s" 
            width='100%'
            height='100%'
            />
            </div>
            <div className="wrapper">
            <ReactPlayer 
            className="player" 
            url="https://www.youtube.com/watch?v=YyXC-EKfqoI" 
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
            </div>
        </div>

    )
}


