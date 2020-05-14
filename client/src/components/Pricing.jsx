import React from "react";
import NavBar from "./NavBar";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div>
      <NavBar active="Pricing" />
      <div className="pricingContainer">
        <div className="imgOverlay">
          <div
            style={{
              position: "absolute",
              top: "5%",
              color: "white",
              width: "100%",
              textAlign: "center",
              letterSpacing: 2
            }}
          >
            <h2>Simple, Straight Forward Pricing</h2>
            <h4>You can have up to <span className="redText">5</span> circles for free! <span className="greenText">$10</span> per circle after</h4>
          </div>
          <img
            className="imgBackground"
            src={require("../images/friends3.jpg")}
            alt="People enjoying life"
          />
        </div>
        <div className="pricingCardContainer"
          style={{
            position: "absolute",
            color: "white",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap:'wrap'
          }}
        >
          <PricingCard
            title="Regular"
            bulletOne="Create Your Group for FREE"
            bulletTwo="Up to 5 circles for FREE"
            bulletThree="Unlimited Chat Messages"
            bulletFour="Robust Chat Options"
            cost="$10/mo per circle"
            btnText="Let's Go"
            toPage="/"
          />
          <PricingCard 
            title="Custom"
            bulletOne="Customizable Group Features"
            bulletTwo="Reports and Analytics"
            bulletThree="Admin Web Management"
            bulletFour=""
            btnText="Contact Us"
            toPage="/contact"
         />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
