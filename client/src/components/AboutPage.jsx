import React from "react";
import NavBar from "./NavBar";

const AboutPage = () => {
  return (
    <div>
      <NavBar active="About" />
      <div className="homeContainer">
        <div className="imgOverlay">
          <img
            className="imgBackground"
            src={require("../images/friends4.jpg")}
            alt="People enjoying coffee"
          />
        </div>
        <div className="titleText">
          <h1 style={{fontWeight:100}}>The impact of person to person <span className="greenText">connection</span></h1>
          <h2 style={{fontWeight:100}}>Hear from the CEO</h2>
        </div>
        <div style={{position:'absolute', top:'25%', width:'100%'}}>
        <div className="videoContainer">
        <iframe class="video" title="vimeo-player" src="https://player.vimeo.com/video/329681447" width="100%" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
