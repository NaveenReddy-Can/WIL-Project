import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaBars, FaUser } from "react-icons/fa";

import "../css/Admin/Ahomepill.css";
import Component1 from "./A_ListAllComplaints";
import Component2 from "./A_ListAllComplaintsResolved";
import Component3 from "./A_ListAllComplaintsResolvedNo";
import Component4 from "./A_ListAllComplaintsResolvedall";
import Component5 from "./A_ListAllCourses";
import Component6 from "./A_ListAllUsers";
import Component7 from "./A_ListAllPayments";
import Component8 from "./A_ListAllQuizzes";
import BootstrapCarousel4 from "../HomepageCarousel2.jsx";

const VerticalPillNav = () => {
  const [selectedPill, setSelectedPill] = useState("pill1");

  const handlePillSelect = (pill) => {
    setSelectedPill(pill);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  let componentToRender;

  switch (selectedPill) {
    case "pill1":
      componentToRender = <Component6 />;
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
    case "pill6":
      componentToRender = <Component1 />;
      break;
    case "pill7":
      componentToRender = <Component7 />;
      break;
    case "pill8":
      componentToRender = <Component8 />;
      break;
    default:
      componentToRender = <BootstrapCarousel4 />;
  }

  return (
    <div className="bod">
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div
          className="menu-button"
          style={{
            position: "absolute",
            top: "50%",
            left: isOpen ? "25%" : 0,
            transform: `translate(-${isOpen ? "50" : "0"}%, -50%)`,
            cursor: "pointer",
            padding: "10px",
            backgroundColor: "blue",
            color: "#fff",
            borderRadius: "5px",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
            zIndex: 1,
            transition: "left 0.3s ease, transform 0.3s ease",
          }}
          onClick={handleClick}
        >
          <FaBars />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: isOpen ? "0%" : "-25%",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            width: "25%",
            height: "100%",

            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
            transition: "left 0.3s ease",
            zIndex: 0,
          }}
        >
          <center>
            <h3 style={{ color: "white" }}>Menu</h3>
          </center>
          <div className="pills">
            <div className="d-flex" style={{ color: "white" }}>
              <Nav
                variant="pills"
                className="flex-column mr-3"
                onSelect={handlePillSelect}
              >
                <Nav.Item>
                  <Nav.Link
                    href="#pill1"
                    eventKey="pill1"
                    style={{ color: "white" }}
                  >
                    <FaUser
                      style={{ backgroundColor: "green", font: "large" }}
                    />{" "}
                    Users{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#pill6"
                    eventKey="pill6"
                    style={{ color: "white" }}
                  >
                    AllComplaints
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#pill2"
                    eventKey="pill2"
                    style={{ color: "white" }}
                  >
                    ComplaintsResolved
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#pill3"
                    eventKey="pill3"
                    style={{ color: "white" }}
                  >
                    CompResolvedNo
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#pill4"
                    eventKey="pill4"
                    style={{ color: "white" }}
                  >
                    Complaints
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#pill5"
                    eventKey="pill5"
                    style={{ color: "white" }}
                  >
                    Courses
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    href="#pill7"
                    eventKey="pill7"
                    style={{ color: "white" }}
                  >
                    Quizes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#pill8"
                    eventKey="pill8"
                    style={{ color: "white" }}
                  >
                    Payments
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div style={{ marginTop: "-140%", marginLeft: "155%" }}>
                {componentToRender}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalPillNav;
