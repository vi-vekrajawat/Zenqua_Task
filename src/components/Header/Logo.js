import React from "react";
import "./Logo.css"; 

const Logo = () => (
  <div
    className="logo"
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "row",
      gap: 6,
    }}
  >
    <div className="custom-hash">
      <div></div>
      <div></div>
    </div>

    <div>
      <div className="logo-top">ROSTER</div>
      <div className="logo-bottom">GRID</div>
    </div>
  </div>
);

export default Logo;
