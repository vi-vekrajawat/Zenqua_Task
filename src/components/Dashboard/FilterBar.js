import React from "react";
import "./FilterBar.css"; 

const FilterBar = ({ onSearchChange, onDateChange, fromDate, toDate }) => (
  <div className="filter-bar">
    <div className="filter-left">
      <div className="view-tabs">
        <button className="view-tab active">▤ Pipeline</button>
        <button className="view-tab">☰ List</button>
      </div>
      <div className="summary-text">
        Total Deals: <span className="">3</span> & Total Revenue in
        Pipeline: <span className="]">$62,000</span>
      </div>
    </div>

    <div className="filter-right">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div className="date-range-box">
        <span>From</span>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => onDateChange("from", e.target.value)}
        />
        <span>To</span>
        <input
          type="date"
          value={toDate}
          onChange={(e) => onDateChange("to", e.target.value)}
        />
      </div>

      <button className="deals-btn">Active Deals</button>
    </div>
  </div>
);

export default FilterBar;
