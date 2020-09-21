import React from 'react';
import ReactPlayer from 'react-player'

export default function Music() {

    return (
        <div className="MusicContainer">
            <h1 id="musicHeader" className="headerTitle">Music</h1>
            <div id="Music">
            <div className="player">
            <ReactPlayer url='https://www.youtube.com/watch?v=A7FJIGZDgdU' />
            </div>
            <div className="player">
            <ReactPlayer url="https://youtu.be/uBnK0gxVG2s" />
            </div>
            <div className="player">
            <ReactPlayer url='https://www.youtube.com/watch?v=meXCcayQXTw' />
            </div>
            <div className="player">
            <ReactPlayer url="https://www.youtube.com/watch?v=ZyhnxhorHQQ&t=36s" />
            </div>
            <div className="player">
            <ReactPlayer url="https://www.youtube.com/watch?v=YyXC-EKfqoI" />
            </div>
            <div className="player">
            <ReactPlayer url="https://youtu.be/kDFJlEOZzG8" />
            </div>
            </div>

    {/* < div className="NewJack">
      <button id="play" onClick={start}>Play</button>
      <button id="pause" onClick={pause}>II</button>
    </div > */}
        </div>

    )
}


