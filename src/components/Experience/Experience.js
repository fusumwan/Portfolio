import React from 'react';
import './Experience.css'; // Make sure the path is correct

function Experience() {
  return (
    <section className="experience-container">
      <div className="status_container">
        <h1>Welcome <span className="highlight">Sum Wan Fu</span></h1>
        <h2><span className="highlight">Software Engineer & AI Enthusiast</span></h2>
        <br></br>
        
        <div className="professional-experience">
          <h3>Professional Experience</h3>
          <br></br>
          <div className="job">
            <h4>Automated Systems (HK) Limited: Analyst Programmer</h4>
            <p>May 2013 - May 2016</p>
            <ul>
              <li>Developed web-service functionalities using Java for PDAs targeting the Windows Mobile 6.5 platform using C#.</li>
              <li>Designed and maintained Java web applications with a focus on cache servers operating on the Red Hat OS.</li>
              <li>Programmed using a diverse set of technologies including Java, Spring, Hibernate, ASP.NET WebForm C#, MSSQL 2005, ORACLE, JQuery, JavaScript, HTML5, XML, CSS, and JSON.</li>
            </ul>
          </div>
          <br></br>
          <div className="job">
            <h4>ICLP: Analyst Programmer</h4>
            <p>Oct 2012 - Jan 2013</p>
            <ul>
              <li>Maintained the CTF CRM and e-card reader systems.</li>
              <li>Developed a new XML Financial report system for CHOW TAI FOOK to validate and maintain finance rules.</li>
            </ul>
          </div>
          <br></br>
          <div className="job">
            <h4>Classroom: Analyst Programmer</h4>
            <p>June 2012 - Sep 2012</p>
            <ul>
              <li>Independently designed and launched a new online Math homework platform.</li>
            </ul>
          </div>
          <br></br>
          <div className="job">
            <h4>Telelink (HR Company): Programmer</h4>
            <p>Dec 2008 - June 2012</p>
            <ul>
              <li>Worked onsite at PCCW focusing on the interplay between business logic and physical models.</li>
              <li>Developed user control libraries for data binding tailored for UI developers and implemented an N-tier architecture with undo capabilities.</li>
            </ul>
          </div>
          <br></br>
          <div className="job">
            <h4>TIM EDPlatform Ltd: Analyst Programmer</h4>
            <p>Mar 2006 - April 2007</p>
            <ul>
              <li>Developed web applications using ASP.NET WebForm 2.0 C# and PHP3, managing server and client projects autonomously.</li>
            </ul>
          </div>
          <br></br>
          <div className="job">
            <h4>Bechelon Consulting: Junior Web Designer</h4>
            <p>Oct 2005 - Nov 2006</p>
            <ul>
              <li>Designed interfaces and developed web applications in collaboration using ASP.NET WebForm C# 2.0, PHP3, MYSQL, and JavaScript.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
