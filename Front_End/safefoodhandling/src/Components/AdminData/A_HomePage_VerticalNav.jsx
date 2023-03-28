import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "../css/Admin/Ahomepill.css";
import Component1 from "./A_ListAllComplaints";
import Component2 from "./A_ListAllComplaintsResolved";
import Component3 from "./A_ListAllComplaintsResolvedNo";
import Component4 from "./A_ListAllComplaintsResolvedall";
import Component5 from "./A_ListAllCourses";

const VerticalPillNav = () => {
  const [selectedPill, setSelectedPill] = useState("pill1");

  const handlePillSelect = (pill) => {
    setSelectedPill(pill);
  };

  let componentToRender;

  switch (selectedPill) {
    case "pill1":
      componentToRender = <Component1 />;
      break;
    case "pill2":
      componentToRender = <Component2 />;
      break;
    case "pill3":
      componentToRender = <Component3 />;
      break;
    case "pill4":
      componentToRender = <Component4 />;
      break;
    case "pill5":
      componentToRender = <Component5 />;
      break;
    default:
      componentToRender = null;
  }

  return (
    <div className="pills">
      <div className="d-flex">
        <Nav
          variant="pills"
          className="flex-column mr-3"
          onSelect={handlePillSelect}
        >
          <Nav.Item>
            <Nav.Link href="#pill1" eventKey="pill1">
              A_ListAllComplaints
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#pill2" eventKey="pill2">
              A_ListAllComplaintsResolved
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#pill3" eventKey="pill3">
              A_ListAllComplaintsResolvedNo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#pill4" eventKey="pill4">
              A_ListAllComplaintsResolvedall
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#pill5" eventKey="pill5">
              A_ListAllCourses
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {componentToRender}
      </div>
    </div>
  );
};

export default VerticalPillNav;
