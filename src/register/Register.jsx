import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  Card,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import baseApi from "../api/apiFetching";
import logo from "../img/logo.png";
import { capitalize } from "lodash";
import _ from "lodash";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setName] = useState("");
  const [age, setAge] = useState("");
  const [reTypepassword, setRetypePassword] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [formType, setFormType] = useState("member");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedGender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");
  const [selectedWork , setSelectedWork] = useState("Part Time");
  const [detailInformation, setDetailInformation] = useState("");
  const [healthInformation , setHealthInformation] = useState("")

  const getUserLocation = (callback) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        callback(location);
      },
      (error) => {
        console.error("Error getting location:", error.message);
        callback(null);
      }
    );
  };

  const handleSubmit = async () => {
    !formValidation().status
      ? setErrorAlert(formValidation().message)
      : getUserLocation((userPosition) => {
          if (userPosition) {
            const data = {
              userName: userName,
              password: reTypepassword,
              email: email,
              age: age,
              latitude: userPosition.latitude,
              longitude: userPosition.longitude,
              location: location,
              experience: experience,
              gender: selectedGender,
              phone: phone,
              work: selectedWork,
              formType: formType
            };

            baseApi
              .post("/register", data)
              .then((response) => {
                if (response.status === 201) {
                  window.location.href = "/login";
                }
              })
              .catch((error) => {
                setErrorAlert(
                  error.response?.data?.message || "An error occurred"
                );
              });
          }
        });
  };

  const formValidation = (type) => {
    let status = null ;
    const mainTest = email !== "" &&
    password !== "" &&
    reTypepassword !== "" &&
    userName !== "" &&
    age !== "";
    location !== "" && selectedGender!=="" && phone!==""

    switch (type) {
      case 'member':
        status = mainTest && detailInformation !=="" && healthInformation !=="";
        break;
    
      default:
        status = mainTest && experience!=="" && selectedWork !==""
        break;
    }
    const message = !status
      ? "All fields are required"
      : password === reTypepassword
      ? ""
      : "Password doesn't match";
    return { status: status, message: message };
  };

  const handleRegistrationTypeChange = (type) => {
    setFormType(type);
    
  };

  return (
    <Container fluid className="bg-light p-5">
      <div className="p-5">
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }} className="mt-4 ">
            <Card className="p-5 w-100 shadow mt-1 position-relative">
              <img
                src={logo}
                width="20%"
                className="position-absolute translate-middle align-center2"
                alt="React Bootstrap logo"
              />
              {errorAlert && (
                <Alert variant="danger" style={{ fontSize: "14px" }}>
                  {errorAlert}
                </Alert>
              )}
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Row>
                  <div className="col-6">
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        value={userName}
                        onChange={(e) => setName(e.target.value)}
                        className="form-font-size"
                        size="sm"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="sm"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAge">
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        size="sm"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLocation">
                      <Form.Control
                        type="text"
                        placeholder="Enter Your location"
                        value={age}
                        onChange={(e) => setLocation(e.target.value)}
                        size="sm"
                      />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="phoneNumber">
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        size="sm"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gender">
                      <Form.Text className="text-muted">
                        Choose Gender
                      </Form.Text>
                      {["Male", "Female"].map((gender) => (
                        <Form.Check
                          inline
                          label={gender}
                          name={gender}
                          type="radio"
                          id={`inline-radio-${gender}`}
                          checked={selectedGender === gender}
                          onChange={() => setGender(gender)}
                          style={{ fontSize: "14px" }}
                        />
                      ))}
                    </Form.Group>
                   
                    
                  </div>
                  <div className="col-6">
                  {formType !== "member" ? (
  <>
    <Form.Group className="mb-3" controlId="role">
      <Form.Select
        style={{ fontSize: "14px" }}
        value={formType}
        onChange={(e) => setFormType(e.target.value)}
        className="w-100"
      >
        <option>Choose Your Role</option>
        {["Care-Giver", "Volunteer"].map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="experience">
      <Form.Control
        type="text"
        placeholder="Enter Your Experience"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        size="sm"
      />
    </Form.Group>
  </>
) : (
  <>
    <Form.Group className="mb-3" controlId="detailInformation">
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter Detail information about yourself"
        value={detailInformation}
        onChange={(e) => setDetailInformation(e.target.value)}
        size="sm"
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="healthInformation">
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter your health information"
        value={healthInformation} 
        onChange={(e) => setHealthInformation(e.target.value)}
        size="sm"
      />
    </Form.Group>
  </>
)}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="sm"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicRetypePassword"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Retype Password"
                        value={reTypepassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        size="sm"
                      />
                    </Form.Group>
                    {formType !== "member" && (
                    <Form.Group controlId="work">
                      <Form.Text className="text-muted">
                        Available for Work
                      </Form.Text>
                      {["Part Time", "Full Time"].map((gender) => (
                        <Form.Check
                          inline
                          label={gender}
                          name={gender}
                          type="radio"
                          id={`inline-radio-${gender}`}
                          checked={selectedWork === gender}
                          onChange={() => setSelectedWork(gender)}
                          style={{ fontSize: "14px" }}
                        />
                      ))}
                    </Form.Group>
                    )}
                  </div>
                </Row>
                <Button
                  variant="outline-warning"
                  type="submit"
                  className="w-100 text-dark"
                  onClick={() => handleSubmit()}
                >
                  Register as {capitalize(formType)}
                </Button>
                <hr />
                <Button
                  variant="warning"
                  type="submit"
                  className="text-dark w-100"
                  onClick={() =>
                    handleRegistrationTypeChange(
                      formType === "member" ? "other" : "member"
                    )
                  }
                >
                  {formType === "member"
                    ? "Register as Other"
                    : "Register as Member"}
                </Button>
                <Row className="mx-auto">
                  <Form.Text className="text-muted">
                    <a href="/login" className="text-dark pl-1 fs-6">
                      Have Account? Login!!
                    </a>
                  </Form.Text>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
