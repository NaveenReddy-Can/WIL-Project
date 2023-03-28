import React from "react";
import { useState } from "react";
import img from "../images/safelogo.png";
import "../css/Admin/Ahome.css";
import BootstrapCarousel4 from "../HomepageCarousel2.jsx";
import VerticalPillsNav from "./A_HomePage_VerticalNav";
import VerticalPillsNavBar from "./A_HomePage_VerticalNav";
import VerticalNav from "./A_HomePage_VerticalNav";
import VerticalPillNavbar from "./A_HomePage_VerticalNav";
import VerticalPillNav from "./A_HomePage_VerticalNav";
import PillsContainer from "./A_pill_container";

function AHomePage() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index) => {
    setActiveItem(index);
  };
  return (
    <div>
      <VerticalPillNav />
      <PillsContainer />
      <div className="Mainclass">{/*<BootstrapCarousel4 /> */}</div>
    </div>
  );
}

export default AHomePage;
