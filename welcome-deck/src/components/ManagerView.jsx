import { useState, useEffect } from "react";
import apiService from "../service/ApiService";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Row, Col, Form, Card, Nav, Navbar } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { employeeDetailsState, employeeImageDataState } from "./Atoms";
import { useNavigate, Link } from "react-router-dom";

const ManagerView = () => {
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] =
    useRecoilState(employeeDetailsState);
  const [employeeId, setEmployeeId] = useState("");
  const [employees, setEmployees] = useState([]);
  const [employeeImageData, setEmployeeImageData] = useRecoilState(
    employeeImageDataState
  );

  useEffect(() => {
    apiService
      .fetchEmployees()
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleFindClick = () => {
    if (!employeeId) {
      alert("Please enter an Employee ID.");
      return;
    }

    apiService
      .fetchEmployeeById(employeeId)
      .then((data) => {
        setEmployeeId(data.id);
        setEmployeeDetails(data);
      })
      .catch((error) => console.error("Error fetching employee:", error));

    apiService
      .getImageById(employeeId)
      .then((data) => {
        setEmployeeImageData(data);
      })
      .catch((error) =>
        console.error("Error in getting profilePicture:", error)
      );
  };

  const handleViewCardClassicClick = () => {
    if (employeeDetails !== null) {
      navigate("/template1");
    } else {
      alert("Enter the details");
    }
  };

  const handleViewCardRetroClick = () => {
    if (employeeDetails !== null) {
      navigate("/template2");
    } else {
      alert("Enter the details");
    }
  };

  const handleViewCardModernClick = () => {
    if (employeeDetails !== null) {
      navigate("/template3");
    } else {
      alert("Enter the details");
    }
  };

  return (
    <>
      <h1 className="text-center display-2">Deck Dashboard</h1>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/userView" className="text-decoration-none">
                <Nav.Link
                  as="div"
                  className="w-100 text-center py-2 my-1 bg-secondary text-white rounded"
                >
                  <PersonAddIcon sx={{ marginRight: 1 }} />
                  New Employee Form
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={4} className="bg-info rounded-2">
            <h3>Employee List</h3>
            <div class="scrollbar" id="style-2">
              <div class="force-overflow">
                {employees.map((employee) => (
                  <Card
                    key={employee.id}
                    className="mb-2"
                    onMouseEnter={(e) => {
                      e.currentTarget.classList.add("shadow-sm");
                      e.currentTarget.classList.add("bg-light");
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.classList.remove("shadow-sm");
                      e.currentTarget.classList.remove("bg-light");
                    }}
                  >
                    <Card.Body>
                      <Card.Title>ID: {employee.id}</Card.Title>
                      <h4>
                        <Card.Text>Name: {employee.name}</Card.Text>
                      </h4>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
          <Col md={8} className="ps-5">
            <Form>
              <Form.Group>
                <Form.Label className="me-3">Employee ID:</Form.Label>
                <div className="flex-grow-1 me-3 mb-3 d-flex justify-content-center">
                  <Form.Control
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-row w-100 justify-content-end pe-3">
                  <Button
                    variant="contained"
                    endIcon={<SearchIcon />}
                    onClick={handleFindClick}
                  >
                    Find
                  </Button>
                </div>
              </Form.Group>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.name || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={employeeDetails?.contactEmail || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <img
                  className="rounded-circle"
                    src={employeeImageData}
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact Mobile:</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.contactMobile || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Hometown:</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.hometown || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Education Qualification:</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.educationQualification || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Experience (Years):</Form.Label>
                    <Form.Control
                      type="number"
                      value={employeeDetails?.experience || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Hobbies:</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.hobbies || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Core Skill:</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.coreSkill || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Favourite Quote:</Form.Label>
                <Form.Control
                  as="textarea"
                  value={employeeDetails?.favouriteQuote || ""}
                  readOnly
                />
              </Form.Group>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Another Profession (Optional):</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.anotherProfession || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Manager</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.assignedManagerName || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>IBU:</Form.Label>
                    <Form.Control
                      type="text"
                      value={employeeDetails?.assignedIbuName || ""}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex gap-2">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleViewCardClassicClick}
                >
                  View Card - Classic Mode
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleViewCardRetroClick}
                >
                  View Card - Retro Mode
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleViewCardModernClick}
                >
                  View Card - Modern Mode
                </Button>
                <Button variant="outlined" disabled>
                  Update
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ManagerView;
