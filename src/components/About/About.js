import React from 'react';
import './About.css'; // Make sure the path is correct

function About() {
  return (
    <section className="about-container">
      
      <div className="status_container">
        <h1>Welcome <span className="highlight">Sum Wan Fu</span></h1>
        <h2><span className="highlight">Software Engineer & AI Enthusiast</span></h2>
        <br></br>
        <div className="education-section">
          <h3>Education</h3>
          <ul>
            <li>Bachelor of Computer Sciences (Honours) from the University of Adelaide, graduated Jan-2022 with Second Class Division A Honours (GPA 5.825).</li>
            <li>Bachelor of Mathematical and Computer Sciences (Major: Artificial Intelligence) from the University of Adelaide, graduated Dec-2020.</li>
            <li>Bachelor of Science with Honours in Computing from Coventry University, graduated in 2015.</li>
            <li>Bachelor of Science with Honours in Creative Technologies from Coventry University, graduated in 2008 with upper second-class honours.</li>
            <li>Professional Diploma in Game Development ITS87 from VTC PEAK, Hong Kong.</li>
            <li>Diploma in Graphic Design from WELKIN, Hong Kong.</li>
            <li>Diploma in IT Expert from UNISOFT, Hong Kong.</li>
          </ul>
        </div>
        <br></br>
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>Java, Spring Boot, Hibernate: 3 years.</li>
            <li>ASP.NET C#: 6 years.</li>
            <li>Oracle, MSSQL, MySQL</li>
            <li>Front-end development with CSS, JavaScript,Jquery, React, Vue, and HTML</li>
            <li>TensorFlow, Python, C++</li>
          </ul>
        </div>
        <br></br>
        <div className="awards">
          <h3>Awards</h3>
          <p>Recognition with several certificates from the Ministry of Industry and Information Technology of the Chinese government in Hong Kong.</p>
        </div>
        <br></br>
        <div className="professional-memberships">
          <h3>Professional Memberships</h3>
          <p>Active member of the University of Adelaide Computer Club and Mathematics Society.</p>
        </div>
        <br></br>
        <div className="interests">
          <h3>Interests</h3>
          <p>I enjoy creating content for YouTube, engaging in forum discussions, and staying active with regular runs on weekends.</p>
        </div>
        <br></br>
        <div className="showcase">
          <h3>Showcase</h3>
          <p>For a glimpse of my capabilities, please visit my <a href="https://programmingnoteblog.blogspot.com/2023/10/github-link-web-application.html" target="_blank" rel="noopener noreferrer">project showcase</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
