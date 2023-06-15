import React, { useEffect, useRef } from 'react';

import { collection,doc, setDoc,addDoc,onSnapshot } from "firebase/firestore";
import { db } from '../../../../firebase-config';


function VideoChat() {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const localStreamRef = useRef(null);
    const peerRef = useRef(null);



    

    return (
        <div>
            <video ref={localVideoRef} autoPlay></video>
            <video ref={remoteVideoRef} autoPlay />
        </div>
    )
}

export default VideoChat