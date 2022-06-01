import React, { useRef } from "react";

export const Video = () => {

    const videoRef = useRef();
    
    return (
        <div>
            <video ref={videoRef} src="https://v16-webapp.tiktok.com/8efda832199ce33a0ec816c1e5b4c960/629650bc/video/tos/alisg/tos-alisg-pve-0037/b6757703de0a4c21a306c3d6ffa0f530/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=3422&amp;bt=1711&amp;btag=80000&amp;cs=0&amp;ds=3&amp;ft=eXd.6H.vMyq8ZjWyvwe2NmuQml7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=NTozNjo6Ojc5MzdkaTxmaEBpM3drNjo6ZnVtPDMzODgzNEBfMy40MWIwXi0xNWAuMi0vYSMxa2xncjRvYl5gLS1kLy1zcw%3D%3D&amp;l=20220531112936010245049193131F7BAA" playsInline="" muted autoPlay="autoplay" className="tiktok-lkdalv-VideoBasic e1yey0rl4"></video>

            <button onClick={()=> videoRef.current.play()}>play</button>
            <button onClick={()=> videoRef.current.pause()}>pause</button>
        </div>
    )
}