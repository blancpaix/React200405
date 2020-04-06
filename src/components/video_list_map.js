import React from 'react';

const VideoItemMap = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)}>
            <div>
                <div>
                    <img src={imageUrl} />
                </div>
            </div>
            <div>
                <div>{video.snippet.title}</div>
            </div>
        </li>
    )
}

export default VideoItemMap;