import React from "react";
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

const Mylearning = () => {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return isAuthenticated ? (
    isAuthenticated && (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="ml-auto"
              >
                Menu
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Wishlist</Dropdown.Item>
                <Dropdown.Item href="#">My Certificates</Dropdown.Item>
                <Dropdown.Item href="#">My Completed Courses</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
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
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Course Title</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet enim ac dolor dictum ultrices ac in mauris. Donec
                    nec sapien a turpis dictum faucibus eu sed sapien.
                  </Card.Text>
                  <ProgressBar now={50} label={`50%`} />
                  <Button variant="primary">Start Course</Button>{" "}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://wilproject.blob.core.windows.net/images/foodstorage1.jpg"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Course Title</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet enim ac dolor dictum ultrices ac in mauris. Donec
                    nec sapien a turpis dictum faucibus eu sed sapien.
                  </Card.Text>
                  <ProgressBar now={25} label={`25%`} />
                  <Button variant="primary">Start Course</Button>{" "}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://wilproject.blob.core.windows.net/images/foodstorage1.jpg"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Course Title</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet enim ac dolor dictum ultrices ac in mauris. Donec
                    nec sapien a turpis dictum faucibus eu sed sapien.
                  </Card.Text>
                  <ProgressBar now={75} label={`75%`} />
                  <Button variant="primary">Start Course</Button>{" "}
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
