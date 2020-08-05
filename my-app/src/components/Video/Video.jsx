import React from 'react';
import videoBooks from '../../video/Book.mp4';
import './Video.scss';


const Video = () => {
    return (
        <video autoPlay loop muted className="video">
            <source src={videoBooks} />
        </video>
    )
}
export default Video;