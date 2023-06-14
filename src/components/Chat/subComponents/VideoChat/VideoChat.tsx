import React, { useEffect, useRef } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';

function VideoChat() {
    const videoRef = useRef(null);
    const socketRef = useRef();
    const userRef = useRef('');
    const peerRef = useRef();

    // get video/voice stream

    

    return (
        <div>
            <video ref={videoRef} autoPlay></video>
        </div>
    )
}

export default VideoChat