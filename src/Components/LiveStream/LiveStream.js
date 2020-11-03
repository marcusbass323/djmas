import React from 'react'
import videojs from 'video.js'
// import awsvideoconfig from './aws-video-exports'
import 'video.js/dist/video-js.css'
import './LiveStream.css';

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props)
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <>
        <div className="player" data-vjs-player>
          <video  ref={(node) => { this.videoNode = node; }} className="video-js player" />
        </div>
      </>
    );
  }
}

const videoJsOptions = {
  autoplay: true,
  controls: true,
//   sources: [{
//     src: awsvideoconfig.awsOutputLiveLL,
//   }]
}

export default function LiveStream() {
  return (
    <div>       
        <VideoPlayer { ...videoJsOptions } />
    </div>
  );
}

