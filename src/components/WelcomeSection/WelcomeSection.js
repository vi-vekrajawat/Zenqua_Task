import React from "react";
import "./WelcomeSection.css";

const WelcomeSection = () => (
  <div className="welcome-section">
    <div>
    <div className="welcome-text">Welcome!</div>
    <h1 className="title">
      Manage your <span className="title-highlight">Deals</span>
    </h1>
    <button className="btn-primary">Get Started</button>
    </div>
    <div>
        <img src="./client-cover.png" style={{height:"250px"}}></img>
    </div>
  </div>
);

export default WelcomeSection;
