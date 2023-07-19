import React from "react";
import NavBar from "./NavBar";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div>
      <NavBar active="Contact" />
      <div className="homeContainer">
        <div className="imgOverlay">
          <img
            className="imgBackground"
            src={require("../images/pool.jpg")}
            alt="People enjoying coffee"
          />
        </div>
        <div className="contactCardContainer">
            <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
