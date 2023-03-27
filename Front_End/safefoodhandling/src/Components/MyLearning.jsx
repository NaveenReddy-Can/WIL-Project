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
import BootstrapCarousel4 from "./dummy2like";

const Mylearning = () => {
  return (
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
                  sit amet enim ac dolor dictum ultrices ac in mauris. Donec nec
                  sapien a turpis dictum faucibus eu sed sapien.
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
                  sit amet enim ac dolor dictum ultrices ac in mauris. Donec nec
                  sapien a turpis dictum faucibus eu sed sapien.
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
                  sit amet enim ac dolor dictum ultrices ac in mauris. Donec nec
                  sapien a turpis dictum faucibus eu sed sapien.
                </Card.Text>
                <ProgressBar now={75} label={`75%`} />
                <Button variant="primary">Start Course</Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mylearning;
