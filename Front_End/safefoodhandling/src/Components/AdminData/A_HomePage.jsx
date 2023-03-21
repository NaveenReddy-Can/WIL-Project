import React from "react";
import { useState } from "react";
import img from "../images/safelogo.png";
import "../css/Admin/Ahome.css";

function AHomePage() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <ul className="list-group">
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
        <a href="/alistallcomplaintsresolvedno">alistallcomplaintsresolvedno</a>
      </li>
      <li class="list-group-item  list-group-item-dark">
        <a href="/alistallpayments">alistallpayments</a>
      </li>
    </ul>
  );
}

export default AHomePage;
