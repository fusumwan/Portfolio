import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

import BgVideo from './components/BgVideo/BgVideo';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import SideNav from './components/SideNav/SideNav';
import ReactJSProjects from './components/ReactJSProjects/ReactJSProjects';
import JavaProjects from './components/JavaProjects/JavaProjects';
import AIProjects from './components/AIProjects/AIProjects';
import PythonProjects from './components/PythonProjects/PythonProjects';
import VueJSProjects from './components/VueJSProjects/VueJSProjects';
import CSharpProjects from './components/CSharpProjects/CSharpProjects';
import CPlusPlusProjects from './components/CPlusPlusProjects/CPlusPlusProjects';
import NodeJSProjects from './components/NodeJSProjects/NodeJSProjects';

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [showBgVideo, setShowBgVideo] = useState(false);
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [showReactJSProjects, setShowReactJSProjects] = useState(false);
  const [showJavaProjects, setShowJavaProjects] = useState(false);

  const [showAIProjects, setShowAIProjects] = useState(false);
  const [showPythonProjects, setShowPythonProjects] = useState(false);
  const [showVueJSProjects, setShowVueJSProjects] = useState(false);
  const [showCSharpProjects, setShowCSharpProjects] = useState(false);
  const [showCPlusPlusProjects, setShowCPlusPlusProjects] = useState(false);
  const [showNodeJSProjects,setShowNodeJSProjects] = useState(false);

  const toggleHome = () => {
    setShowHome(true)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); 
    setShowLoadingAnimation(false);
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const toggleAbout = () => {
    setShowHome(false)
    setShowAbout(true)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); 
    setShowLoadingAnimation(false);
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const toggleContact = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(true)
    setShowBgVideo(false); 
    setShowLoadingAnimation(false);
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const toggleExperience = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(true)
    setShowContact(false)
    setShowBgVideo(false); 
    setShowLoadingAnimation(false);
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const toggleBgVideo = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(true); // Explicitly set to true
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const toggleLoadingAnimation = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(true); // Explicitly set to true
    setShowReactJSProjects(false); // Ensure the other component is hidden
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const toggleReactJSProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(true);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  
  const toggleJavaProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(true);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const toggleAIProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(true);
    setShowPythonProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const togglePythonProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(true);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  };

  const toggleVueJSProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(true);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  }

  const toggleCSharpProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(true);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(false);
  }

  const toggleCPlusPlusProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(true);
    setShowNodeJSProjects(false);
  }

  const toggleNodeJSProjects = () => {
    setShowHome(false)
    setShowAbout(false)
    setShowExperience(false)
    setShowContact(false)
    setShowBgVideo(false); // Ensure the other component is hidden
    setShowLoadingAnimation(false); // Ensure the other component is hidden
    setShowReactJSProjects(false);
    setShowJavaProjects(false);
    setShowAIProjects(false);
    setShowPythonProjects(false);
    setShowVueJSProjects(false);
    setShowCSharpProjects(false);
    setShowCPlusPlusProjects(false);
    setShowNodeJSProjects(true);
  }


  const toggleOnload = () => {
    if (window.innerWidth > 700) {
      document.querySelector(".nav-bar").classList.add("open");
    }
  };

  useEffect(() => {
    toggleHome();
    toggleOnload();
    const handleNavBarToggle = (e) => {
      const navBar = document.querySelector(".nav-bar");
      const isOutsideNavBar = !e.target.closest(".nav-bar");
      const isCloseButton = e.target.closest(".btn.close");
      const isToggleButton = e.target.closest(".open");
    
      if (isToggleButton && !navBar.classList.contains("open")) {
        navBar.classList.add("open");
      } else if (isOutsideNavBar || isCloseButton) {
        navBar.classList.remove("open");
      }
    };
    document.addEventListener("click", handleNavBarToggle);
    return () => {
      document.removeEventListener("click", handleNavBarToggle);

    };
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {showHome&&<Home />}
        {showAbout&&<About />}
        {showExperience&&<Experience />}
        {showContact&&<Contact />}
        {showBgVideo && <BgVideo />}
        {showLoadingAnimation && <LoadingAnimation />}
        {showReactJSProjects && <ReactJSProjects 
          onShowBgVideo={toggleBgVideo} 
          onShowLoadingAnimation={toggleLoadingAnimation} 
        />}
        {showJavaProjects && <JavaProjects></JavaProjects>}
        {showAIProjects && <AIProjects></AIProjects>}
        {showPythonProjects && <PythonProjects></PythonProjects>}
        {showVueJSProjects && <VueJSProjects></VueJSProjects>}
        {showCSharpProjects && <CSharpProjects></CSharpProjects>}
        {showCPlusPlusProjects && <CPlusPlusProjects></CPlusPlusProjects>}
        {showNodeJSProjects && <NodeJSProjects></NodeJSProjects>}
        <SideNav
          toggleHome={toggleHome}
          toggleAbout={toggleAbout}
          toggleExperience={toggleExperience}
          toggleContact={toggleContact}
          toggleReactJSProjects={toggleReactJSProjects}
          toggleJavaProjects={toggleJavaProjects}
          toggleAIProjects={toggleAIProjects}
          togglePythonProjects={togglePythonProjects}
          toggleVueJSProjects={toggleVueJSProjects}
          toggleCSharpProjects={toggleCSharpProjects}
          toggleCPlusPlusProjects={toggleCPlusPlusProjects}
          toggleNodeJSProjects={toggleNodeJSProjects}
        />
      </header>
    </div>
  );
}

export default App;
