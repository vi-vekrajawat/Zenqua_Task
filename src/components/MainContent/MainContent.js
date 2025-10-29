import React from "react";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import DashboardCard from "../Dashboard/DashboardCard";

const MainContent = () => (
  <div
    className="main-content"
    style={{
  background: "linear-gradient(to bottom, #ffffffff 0%, #868ebaff 100%)",
}}
  >    <WelcomeSection />
    <DashboardCard />
  </div>
);

export default MainContent;
