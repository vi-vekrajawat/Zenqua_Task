import { Bell } from "lucide-react";
import React from "react";

const UserSection = () => (
  <div className="user-section">
    <Bell size={22} style={{marginTop:"5px"}} strokeWidth={1.5} color="#000" />

    <span>Michael</span>
    <div className="avatar">M</div>
  </div>
);

export default UserSection;
