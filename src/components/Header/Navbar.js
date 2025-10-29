import React from "react";
import { ChevronDown } from "lucide-react"; 

const navItems = [
  "Dashboard",
  "Roster",
  "Communications",
  "CRM",
  "Contracts",
  "Settings",
  "More"
];

const Navbar = () => (
  <div className="nav-container">
    {navItems.map((item, idx) => (
      <div
        key={idx}
        className={`nav-item ${item === "CRM" ? "active" : ""}`}
      >
        <span>{item}</span>
        <ChevronDown className="dropdown-icon" size={16} />
      </div>
    ))}
  </div>
);

export default Navbar;
