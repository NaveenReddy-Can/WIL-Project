import React from "react";
import { useState } from "react";

import {
  Container,
  Row,
  Col,
  Dropdown,
  Button,
  ProgressBar,
  Card,
} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import CourseModule3 from "./Courses/CoursesModule3";
import CourseModule2 from "./Courses/CourseModule2";
import CourseModule1 from "./CourseModule1";
import CourseModule4 from "./Courses/CourseModule4";

const Mylearning = () => {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);

  const handleButtonClick1 = () => {
    window.open("/cm2", "_blank");
  };

  const handleButtonClick2 = () => {
    window.open("/cm3", "_blank");
  };

  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return isAuthenticated ? (
    isAuthenticated && (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Dropdown style={{ position: "absolute", right: 120 }}>
            <Dropdown.Toggle
              variant="warning"
              id="dropdown-basic"
              className="ml-auto"
            >
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Wishlist</Dropdown.Item>
              <Dropdown.Item href="#">My Certificates</Dropdown.Item>
              <Dropdown.Item href="#">My Completed Courses</Dropdown.Item>
              <Dropdown.Item href="/uploadblob">
                Upload A blob file
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        <Container>
          <Row>
            <Col>
              <h1>My Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://wilproject.blob.core.windows.net/images/foodstorage1.jpg"
                  style={{ height: "400px" }}
                />
                <Card.Body style={{ color: "black" }}>
                  <Card.Title style={{ fontWeight: 800, color: "#543254" }}>
                    Safe food handling
                  </Card.Title>
                  <Card.Text style={{ fontWeight: 300 }}>
                    Safe food handling is important to prevent illness. It
                    involves proper food storage, cooking, and cleaning to avoid
                    harmful bacteria. Wash hands, cook meat to recommended
                    temperatures, and refrigerate leftovers promptly. Follow
                    these steps to keep food safe.
                  </Card.Text>
                  <ProgressBar now={50} label={`50%`} variant="secondary" />
                  <br></br>
                  <Button onClick={handleButtonClick1} variant="success">
                    Start Course
                  </Button>{" "}
                  {showComponent1 && <CourseModule2 />}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://wilproject.blob.core.windows.net/images/foodstorage1.jpg"
                  style={{ height: "400px" }}
                />
                <Card.Body style={{ color: "black" }}>
                  <Card.Title style={{ fontWeight: 800, color: "#543254" }}>
                    {" "}
                    Food safety
                  </Card.Title>
                  <Card.Text style={{ fontWeight: 300 }}>
                    Food safety involves practices to prevent contamination and
                    spoilage of food, and to reduce the risk of foodborne
                    illness. By following guidelines such as proper storage,
                    handling, and cooking, we can ensure that the food we eat is
                    safe and healthy.
                  </Card.Text>
                  <ProgressBar now={25} label={`25%`} variant="secondary" />
                  <br></br>
                  <Button onClick={handleButtonClick2} variant="success">
                    Start Course
                  </Button>{" "}
                  {showComponent2 && <CourseModule3 />}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  ) : (
    <div
      class="jumbotron"
      style={{ marginLeft: "150px", marginRight: "100px" }}
    >
      <h1 class="display-4">
        Please login... to see Your Learning Progress Here
      </h1>
      <p class="lead">
        Up on successfull login user will be albe to see the listed below in the
        page.
      </p>
      <hr class="my-2"></hr>

      <p>
        Course content: This could include a list of courses or tutorials you
        are enrolled in or interested in taking, along with their descriptions,
        materials, and assignment.
      </p>

      <p>
        Progress tracking: Your learning page may have a feature to track your
        progress in the courses you are taking or learning materials you are
        studying.
      </p>

      <p>
        Recommended resources: Your learning page might recommend additional
        resources or materials based on your interests and progress, such as
        books, articles, videos, or online communities.
      </p>

      <p>
        Discussion forums: Your learning page might have discussion forums or
        chat rooms where you can interact with other learners, ask questions, or
        collaborate on projects.
      </p>

      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Mylearning;
