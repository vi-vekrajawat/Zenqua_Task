import React from "react";
import "./TabsRow.css";

const TabsRow = () => (
  <div className="tabs-row">
    <div className="tabs-left">
      <button className="tab-button active">My Deals</button>
      <button className="tab-button">All Clients</button>
    </div>

    <div className="tabs-center">
      <span className="user-avatar">MS</span>
    </div>

    <div className="tabs-right">
      <button className="clear-btn">✕ clear</button>
    </div>
  </div>
);

export default TabsRow;
