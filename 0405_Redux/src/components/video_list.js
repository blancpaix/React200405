import React from 'react';

import VideoListMap from './video_list_map';

const VideoList = (props) => {
    const video = props.videos;
    const videoMap = props.videos.map((video) => {
        return (
            <VideoListMap 
                video = {video}
                key = {video.etag}
                onVideoSelect = {props.onVideoSelect}
            />
        )
    })
    
    return (
        <ul className="list-group col-md-4">
            {videoMap}
        </ul>
    )
}

export default VideoList;