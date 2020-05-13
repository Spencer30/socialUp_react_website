import React from 'react';
import AvatarGroup from './AvatarGroup';

const AppJumbotron = () => {
  let clientWidth = window.innerWidth;
    return (
        <div className="homeContainer">
        <div className="imgOverlay">
          <img
            className="imgBackground"
            src={require('../images/water.jpg')}
            alt="People enjoying coffee"
          />
          <div className="headingContainer">
          <h2>Find People Just Like You....</h2>
          <h5 className="appSubTitle" style={{fontWeight:100}}>It can be hard to make new friends, especially in a large group. Find your fit and build <span className="greenText"> real friendships</span></h5>
          </div>
          <AvatarGroup display={clientWidth < 740 ? false : true} team={1} top="25%" left="5%" name="Basketball Crew"/>
          <AvatarGroup display={true} team={2} top="65%" left="25%" name="Nature & Hiking"/>
          <AvatarGroup display={clientWidth < 740 ? false : true} team={3} top="65%" right="25%" name="Yoga & Dance"/>
          <AvatarGroup display={true} team={3} top="25%" right="50%" name="Happy Hours"/>
          <AvatarGroup display={true} team={1} top="25%" right="5%" name="Volunteer Team"/>
        </div>
        </div>
    )
}

export default AppJumbotron;