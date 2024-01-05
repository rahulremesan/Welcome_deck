import { useState, useEffect } from "react";
import apiService from "../service/ApiService";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AddEmployee = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    id: "",
    name: "",
    contactMobile: "",
    contactEmail: "",
    hometown: "",
    educationQualification: "",
    experience: "",
    hobbies: "",
    coreSkill: "",
    favouriteQuote: "",
    anotherProfession: "",
    assignedIbuName: "",
    assignedManagerName: "",
  });

  const [ibus, setIbus] = useState([]);
  useEffect(() => {
    apiService
      .fetchIbus()
      .then((data) => setIbus(data))
      .catch((error) => console.error("Error fetching IBUs:", error));
  }, []);

  const [manager, setManager] = useState([]);
  useEffect(() => {
    apiService
      .fetchManager()
      .then((data) => setManager(data))
      .catch((error) => console.error("Error fetching IBUs:", error));
  }, []);

  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (name === "idProfilePicture") {
      var formImage = new FormData();
      formImage.append("file", e.target.files[0]);
      formImage.append("id", employeeDetails.id);
      setProfilePhoto(formImage);
      console.log(formImage);
    }

    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
    console.log(employeeDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
      await apiService.addEmployee(employeeDetails);
      console.log("Employee added successfully");

      await apiService.addProfilePicture(profilePhoto);
      console.log("Profile Picture Uploaded");
      alert("Details submited sucessfuly");
      setEmployeeDetails({
        id: "",
        name: "",
        contactMobile: "",
        contactEmail: "",
        hometown: "",
        educationQualification: "",
        experience: "",
        hobbies: "",
        coreSkill: "",
        favouriteQuote: "",
        anotherProfession: "",
        profilePictureId: "",
        assignedIbuName: "",
        assignedManagerName: "",
      });
    // } catch (error) {
    //   console.error("Error adding employee: ", error);
    // }
  };

  return (
    <Container className="d-block justify-content-center align-items-center h-500">
      <Row className="w-200">
        <Col md={8} className="p-4 bg-light rounded-lg shadow-sm col-md-12">
          <h1 className="text-center mb-4 text-primary"> New Employee Form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formId">
              <Form.Label className="fw-bold">ID:</Form.Label>{" "}
              <Form.Control
                type="text"
                name="id"
                value={employeeDetails.id}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label className="fw-bold">Name:</Form.Label>{" "}
              <Form.Control
                type="text"
                name="name"
                value={employeeDetails.name}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="contactEmail"
                    value={employeeDetails.contactEmail}
                    onChange={handleInputChange}
                    className="w-100 p-2"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formMobile">
                  <Form.Label>Mobile:</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactMobile"
                    value={employeeDetails.contactMobile}
                    onChange={handleInputChange}
                    className="w-100 p-2"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formHomeTown">
              <Form.Label>Home Town::</Form.Label>
              <Form.Control
                type="text"
                name="hometown"
                value={employeeDetails.hometown}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEducationQualification">
              <Form.Label>Educational Qualification:</Form.Label>
              <Form.Control
                type="text"
                name="educationQualification"
                value={employeeDetails.educationQualification}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>

            <Form.Group controlId="formExperience">
              <Form.Label>Experience:</Form.Label>
              <Form.Control
                type="text"
                name="experience"
                value={employeeDetails.experience}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>

            <Form.Group controlId="formhobbies">
              <Form.Label>Hobbies:</Form.Label>
              <Form.Control
                type="text"
                name="hobbies"
                value={employeeDetails.hobbies}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>

            <Form.Group controlId="formCoreSkill">
              <Form.Label>Core Skill:</Form.Label>
              <Form.Control
                type="text"
                name="coreSkill"
                value={employeeDetails.coreSkill}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>

            <Form.Group controlId="formFavouriteQuote">
              <Form.Label>Inspired Quote:</Form.Label>
              <Form.Control
                type="text"
                name="favouriteQuote"
                value={employeeDetails.favouriteQuote}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>

            <Form.Group controlId="formAnotherProfesssion">
              <Form.Label>Another Profession:</Form.Label>
              <Form.Control
                type="text"
                name="anotherProfession"
                value={employeeDetails.anotherProfession}
                onChange={handleInputChange}
                className="w-100 p-2"
                required
              />
            </Form.Group>
            <Form.Control
              type="file"
              name="idProfilePicture"
              onChange={handleInputChange}
              className="w-100 p-2"
              required
              multiple={false}
            />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formassignedIbu">
                  <Form.Label>IBU:</Form.Label>
                  <Form.Control
                    as="select"
                    name="assignedIbuName"
                    value={employeeDetails.assignedIbuName}
                    onChange={handleInputChange}
                    className="w-100 p-2"
                    required
                  >
                    <option value="">Select IBU</option>
                    {ibus &&
                      ibus.map((ibu) => (
                        <option key={ibu.ibuId} value={ibu.name}>
                          {ibu.name}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formassignedManager">
                  <Form.Label>Manager:</Form.Label>
                  <Form.Control
                    as="select"
                    name="assignedManagerName"
                    value={employeeDetails.assignedManagerName}
                    onChange={handleInputChange}
                    className="w-100 p-2"
                  >
                    <option value="">Select Manager</option>
                    {manager &&
                      manager.map((managers) => (
                        <option key={managers.mngId} value={managers.mngName}>
                          {managers.mngName}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="primary"
              type="submit"
              className="mt-4 w-100 d-flex justify-content-center"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEmployee;
