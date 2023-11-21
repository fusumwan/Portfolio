import React from 'react';
import './LoadingAnimation.css'; // Make sure the path is correct

function LoadingAnimation() {
  return (
    <section className="loading-container">
      <div className="wrapper">
        <div className="loader">
          <div className="loading one"></div>
          <div className="loading two"></div>
          <div className="loading three"></div>
          <div className="loading four"></div>
        </div>
      </div>
    </section>
  );
}

export default LoadingAnimation;
