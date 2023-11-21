import React, { useRef, useEffect } from 'react';
import './BgVideo.css';

function BgVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    // Mute the video
    videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
    videoRef.current.play();

    // Since 'src' is not defined and not required here, removing its related line
  }, []);

  return (
    <div className="video-container">
    <section className="hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="back-video" 
        ref={videoRef} // Updated the ref name here
      >
        <source src={`${process.env.PUBLIC_URL}/BgVideo/video.mp4`} type="video/mp4" />
      </video>

      <section className="content">
        <h1>Journey</h1>
        <a href="#">Explore</a>
      </section>
    </section>
    </div>
  );
}

export default BgVideo;
