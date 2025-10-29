import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import UserSection from "./UserSection";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <UserSection />
    </div>
  );
};

export default Header;
