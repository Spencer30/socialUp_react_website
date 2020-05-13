import React from "react";
import NavBar from "./NavBar";
import AppJumbotron from "./AppJumbotron";
import AppSteps from "./AppSteps";
import { useState } from "react";

let step1Count = 0;
let step2Count = 0;
let step3Count = 0;
const AppPage = () => {
  const [imageOne, setImageOne] = useState(require("../images/Step1a.png"));
  const [imageTwo, setImageTwo] = useState(require("../images/Step2a.png"));
  const [imageThree, setImageThree] = useState(require('../images/Step3a.png'));

  const imageClickOne = () => {
    step1Count++;
    switch (step1Count) {
      case 0:
        setImageOne(() => require("../images/Step1a.png"));
        break;
      case 1:
        setImageOne(() => require("../images/Step1b.png"));
        break;
      case 2:
        setImageOne(() => require("../images/Step1c.png"));
        break;
      case 3:
        setImageOne(() => require("../images/Step1d.png"));
        break;
      case 4:
        setImageOne(() => require("../images/Step1e.png"));
        break;
      case 5:
        setImageOne(() => require("../images/Step1f.png"));
        break;
      case 6:
        setImageOne(() => require("../images/Step1g.png"));
        break;
      case 7:
        step1Count = 0;
        setImageOne(() => require("../images/Step1a.png"));
        break;
      default:
        break;
    }
  };

  const imageClickTwo = () => {
    step2Count++;
    switch (step2Count) {
      case 0:
        setImageTwo(() => require("../images/Step2a.png"));
        break;
      case 1:
        setImageTwo(() => require("../images/Step2b.png"));
        break;
      case 2:
        setImageTwo(() => require("../images/Step2c.png"));
        break;
      case 3:
        setImageTwo(() => require("../images/Step2d.png"));
        break;
      case 4:
        setImageTwo(() => require("../images/Step2e.png"));
        break;
      case 5:
        setImageTwo(() => require("../images/Step2f.png"));
        break;
      case 6:
        setImageTwo(() => require("../images/Step2g.png"));
        break;
      case 7:
        setImageTwo(() => require("../images/Step2h.png"));
        break;
      case 8:
        step2Count = 0;
        setImageTwo(() => require("../images/Step2a.png"));
        break;
      default:
        break;
    }
  };

  const imageClickThree = () => {
    step3Count++;
    switch (step3Count) {
      case 0:
        setImageThree(() => require("../images/Step3a.png"));
        break;
      case 1:
        setImageThree(() => require("../images/Step3c.png"));
        break;
      case 2:
        setImageThree(() => require("../images/Step3d.png"));
        break;
      case 3:
        setImageThree(() => require("../images/Step3e.png"));
        break;
      case 4:
        step2Count = 0;
        setImageThree(() => require("../images/Step3a.png"));
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <NavBar active="App" />
      <AppJumbotron />
      <AppSteps
        title="Find"
        subTitle="Making Your Group Feel Smaller"
        bulletOne="Join circles that interest you"
        bulletTwo="Only receive chats for circles you join"
        bulletThree="Unjoin circles at anytime"
        image={imageOne}
        onClick={imageClickOne}
      />
      <AppSteps
        title="Connect"
        subTitle="Enjoying interests together in real life"
        bulletOne="Easy and fun invites to send to your circles"
        bulletTwo="More turnout at events by casting a wide net"
        bulletThree="Memories are created in-person, creating true friendships"
        image={imageTwo}
        onClick={imageClickTwo}
        reverse="reverse"
      />
      <AppSteps 
        title="Relax"
        subTitle="Increase participation. Not noise"
        bulletOne="It's up to you to choose the chats to join"
        bulletTwo="Only start receiving messages after you join"
        bulletThree="Filter out the extra noise"
        image={imageThree}
        onClick={imageClickThree}
      />
        
    </div>
  );
};

export default AppPage;
