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
          <h2>Find Your Circle....</h2>
          <h5 className="appSubTitle" style={{fontWeight:100}}>It can be hard to make new friends, especially in a large group. Find your fit and build <span className="greenText"> real friendships</span></h5>
          </div>
          <div style={{position:'absolute', top:'25%', width:'100%', display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
          <AvatarGroup team={1} name="Basketball Crew"/>
          <AvatarGroup team={2} name="Chiefs Parties"/>
          <AvatarGroup team={3} name="Coffee Chats"/>
          <AvatarGroup team={6} name="Dinner Club"/>
          <AvatarGroup team={5} name="Happy Hours"/>
          <AvatarGroup team={4} name="Nature & Hiking"/>
          <AvatarGroup team={3} name="Volunteer Team"/>
          <AvatarGroup team={2} name="Weekend Meetups"/>
          <AvatarGroup team={1} name="Yoga & Dance"/>
          <AvatarGroup team={6} name="Young Professionals"/>
          </div>
        </div>
        </div>
    )
}

export default AppJumbotron;