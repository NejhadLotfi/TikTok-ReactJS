import React, { useState } from 'react'
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';


function VideoSidebar() {
    const [liked , setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? 
                    <FavoriteIcon
                    onClick = {e => setLiked(false)}
                    /> : <FavoriteBorderIcon
                    onClick={e => setLiked(true)}
                    />
                }
                <p>300</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon />
                <p>250</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon />
                <p>10</p>
            </div>
        </div>
    )
}

export default VideoSidebar
