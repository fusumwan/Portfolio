import React, { useState  } from 'react';
import './Home.css'; // Make sure the path is correct

function Home() {
  // State to manage the glow effect
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse over
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  // Function to handle mouse out
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Construct the file path
    const filePath = process.env.PUBLIC_URL + '/Pdf/CV-Resume-07-08-2024.docx.pdf';
    // Create a new anchor element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CV-Resume-07-08-2024.docx.pdf';
    // Append to the document and trigger download
    document.body.appendChild(link);
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  // Function to handle opening the GitHub URL in a new tab
  const handleExploreGitHub = () => {
    // Open the URL in a new tab
    window.open('https://github.com/fusumwan/', '_blank');
  };

  // Dynamic style based on hover state
  const hexagonStyle = {
    display: 'inline-block',
    filter:  isHovered ? 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.8))':'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))', /* Glowing effect */
  };

  return (
    <section className="home-container">
      <div className="status_container">
        <h1>Hello, It's Me <span className="highlight">Sum Wan</span></h1>
        <h2>And I'm a <span className="highlight">Software Engineer & AI Enthusiast</span></h2>
        <p>Full-Stack Developer | Software Engineering</p>
        <p>Data Analytics | Machine Learning Engneering</p>
        <p>Analyst Programmer</p>
        <div className="social-links">
          <a href="https://www.facebook.com/timothy.fu.16/" className="social-icon">
            f
          </a>
          <a href="https://twitter.com/JavaTimoth23081" className="social-icon">
            t
          </a>
          <a href="https://www.instagram.com/theomatrix123/" className="social-icon">
            i
          </a>
          <a href="https://www.linkedin.com/in/sum-wan-fu/" className="social-icon">
            l
          </a>
        </div>
        
        <button id="download-cv" className="blue-button" onClick={handleDownloadCV}>Download CV</button>
        &nbsp;
        <button id="explore-github" className="blue-button" onClick={handleExploreGitHub}>Download Source Code!</button>
      </div>
      <div className="hexagon-shadow" style={hexagonStyle}
           onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>
        <div className="hexagon-wrapper">
          <img src={process.env.PUBLIC_URL + '/Images/owner_portfolio.png'} alt="Profile" />
        </div>
      </div>
      
    </section>
  );
}

export default Home;
