import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";

const Home = () => {
  const [showError, setShowError] = useState(false);

  const appStoreClick = () => setShowError(() => true);
  return (
    <div>
      <NavBar active="home"/>
      <div className="homeContainer">
        <div className="imgOverlay">
          <img
            className="imgBackground"
            src={require('../images/coffee people.jpeg')}
            alt="People enjoying coffee"
          />
        </div>
        <div className="textContainer">
          <h2 className="title">
            Meet and Make Friends in the{" "}
            <span className="greenText">Real World</span>
          </h2>
          <h5 className="subTitle">
            Social chat application for large groups and organizations
          </h5>
          <h5 style={{visibility: showError ? 'visible' : 'hidden', color:'#c64b3a', margin:'.5rem'}}>Sorry, SocialUp is not currently in the app stores.</h5>
          <button onClick={appStoreClick} className="appStore">
            <i className="fab fa-google-play"></i> Google Play
          </button>
          <button onClick={appStoreClick} className="appStore">
            <i className="fab fa-apple"></i> Apple
          </button>
        </div>
        <img className="phone" src={require('../images/white.png')} alt="phone" />
      </div>
    </div>
  );
};

export default Home;
