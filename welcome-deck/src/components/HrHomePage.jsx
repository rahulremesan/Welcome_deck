import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

const HrHomePage = () => {
  return (
    <Container className="bg-light p-4 rounded-3"> {/* Light background */}
    <h1 className="text-center text-black mb-4">HR Home Page</h1>
    <Row className="justify-content-center">
      <Col md={5} className="mb-4"> {/* Cards with equal width */}
        <Card className="border shadow-hover h-100"> {/* Hover effect and shadow on hover */}
          <CardBody>
            <Link to="/managerView" className="text-decoration-none">
              <CardTitle className="text-center font-weight-bold text-secondary">New Joinees</CardTitle>
              <CardText className="text-center">
                Relevant information of new Joinees.
              </CardText>
              <Button variant="primary" className="w-100">View Details</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
      <Col md={5} className="mb-4">
        <Card className="border shadow-hover h-100">
          <CardBody>
            <Link to="/userView" className="text-decoration-none">
              <CardTitle className="text-center font-weight-bold text-secondary">Form</CardTitle>
              <CardText className="text-center">Form for the New Joinees</CardText>
              <Button variant="secondary" className="w-100">Fill Form</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default HrHomePage;