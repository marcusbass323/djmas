import React from 'react';
import ReactLivestream from 'react-livestream';

export default function LiveStream() {

    function OfflineComponent() {
        return (
          <div id="offline">
            <p>I am offline now, but checkout my stream on Fridays at 5 PM EST</p>
          </div>
        )
      }

    return (
        <div id="Livestream">
            <h1>Livestream</h1>
            <div id="stream">
            <ReactLivestream
              platform="twitch"
              twitchDataUrl="ENDPOINT_URL"
              twitchUserName="djxerokool"
            />
            </div>
        </div>
    )
}
