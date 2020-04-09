import React from 'react';

const VideoItemMap = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="midea-right">
                    <img src={imageUrl} className="media-object"/>
                </div>
            </div>
            <div className="media-body">
                <div className="media-head">{video.snippet.title}</div>
            </div>
        </li>
    )
}

export default VideoItemMap;