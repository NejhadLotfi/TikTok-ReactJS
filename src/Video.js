import React , { useRef , useState } from "react";
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
     <div className="video">
        <video className= "video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v19.tiktokcdn.com/e5c4832487221ef15faccf3bec93e1ec/5fc29d4d/video/tos/alisg/tos-alisg-pve-0037c001/de620682c5cc44c18e07fe5bf4c06cff/?a=1233&br=3500&bt=1750&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202011281256030101150452321E8DA553&lr=all&mime_type=video_mp4&qs=0&rc=amYzNzwzODZpeTMzNjczM0ApNWY1Zzo0OGVlNzRoOzo5PGdwcW9jMGovay1fLS00MTRzczVfYzBgL2MtYzMxNTNfXzA6Yw%3D%3D&vl=&vr="></video>
        <VideoFooter channel="ahmadpanah" description="THis is Description" song="My Song" />
        <VideoSidebar />
        </div> 
    );
    
}

export default Video
