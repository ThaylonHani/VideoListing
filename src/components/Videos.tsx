import * as React from 'react';
import { Video } from './Video';

interface videosType {
    videos: Object[]  
}

export function Videos({videos}:videosType) {


    return (
        <>
            {videos.map((video)  => {

                return <Video 
                key = {Math.random()}
                thumb= {video.snippet.thumbnails.medium.url} 
                tittle= {video.snippet.title}
                href = {video.id.videoId}
                /> }
            )}
        </>
    )

}