import React from "react";
import { useState } from "react";
import img from "../images/safelogo.png";
import "../css/Admin/Ahome.css";

import VerticalPillNav from "./A_HomePage_VerticalNav";
import PillsContainer from "./A_pill_container";

function AHomePage() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navItems = ["Home", "About", "Contact"];

  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index) => {
    setActiveItem(index);
  };
  return (
    <div>
      <div className="Mainclass">{/*<BootstrapCarousel4 /> */}</div>
      <VerticalPillNav />

      {/* <ul>
       <PillsContainer />
         <VerticalPillNav />
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallusers">alistallusers</a>
        </li>
        <li class="list-group-item  list-group-item-dark ">
          <a href="/alistallquizzes">alistallquizzes</a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallquizzes">alistallquizzes</a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallcourses">alistallcourses</a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallcomplaints">alistallcomplaints</a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallresolvedcomplaintss">alistallresolvedcomplaints</a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallquizattempts">alistallquizattempts</a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="alistallcomplaintsresolvedyes">
            alistallcomplaintsresolvedyes
          </a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallcomplaintsresolvedall">
            alistallcomplaintsresolvedall
          </a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallcomplaintsresolvedno">
            alistallcomplaintsresolvedno
          </a>
        </li>
        <li class="list-group-item  list-group-item-dark">
          <a href="/alistallpayments">alistallpayments</a>
        </li>
      </ul>*/}
    </div>
  );
}

export default AHomePage;
