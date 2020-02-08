import React from 'react';
import s from './Video.module.css';
import video from '../../video/advertisement.mp4';

const Video = () => {
  return (
    <>
      <video className={s.video} autoPlay loop muted width="800" height="600">
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
