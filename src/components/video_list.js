import React from 'react';

import VideoItemMap from './video_list_map';

const VideoList = (props) => {
    const video = props.videos;
    const videoMap = props.videos.map((video) => {
        return (
            <VideoItemMap 
                video = {video}
                key = {video.etag}
                onVideoSelect = {props.onVideoSelect}
            />
        )
    })
    
    return (
        <ul>
            {videoMap}
        </ul>
    )
}

export default VideoList;