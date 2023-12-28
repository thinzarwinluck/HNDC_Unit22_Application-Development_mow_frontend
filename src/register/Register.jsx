import React, { useState } from "react";
import { Container, Button, Form, Card, Row, Col, Alert } from "react-bootstrap";
import baseApi from "../api/apiFetching";
import logo from "../img/logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setName] = useState("");
  const [age, setAge] = useState("");
  const [reTypepassword, setRetypePassword] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

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


  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== reTypepassword){
      setErrorAlert("Password does not match");

    }else{
    getUserLocation((userPosition) => {
      
      if (userPosition) {
        const data = {
          userName: userName,
          password: reTypepassword,
          email: email,
          age: age,
          latitude: userPosition.latitude,
          longitude: userPosition.longitude,
        };

        baseApi.post("/register", data)
          .then(response => {
            if (response.status === 201) {
              // Consider using React Router to navigate within your app
              window.location.href = "/login";
            }
          })
          .catch(error => {
            setErrorAlert(error.response?.data?.message || "An error occurred");
          });
      }
    });
  }
  };

  return (
    <Container fluid className="bg-light p-5 full-screen">
      <div className="p-5">
        <Row className="mt-5">
          <Col md={{ span: 4, offset: 4 }} className="mt-4 ">
            <Card className="p-5 w-100 shadow mt-1 position-relative">
              <img
                src={logo}
                width="40%"
                className="position-absolute translate-middle align-center"
                alt="React Bootstrap logo"
              />

              <Form className="mt-3" onSubmit={handleSubmit}>
                {errorAlert && <Alert variant="danger">{errorAlert}</Alert>}
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    value={userName}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRetypePassword">
                  <Form.Control
                    type="password"
                    placeholder="Retype Password"
                    value={reTypepassword}
                    onChange={(e) => setRetypePassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button
                  variant="outline-warning"
                  type="submit"
                  className="w-100 text-dark"
                >
                  Create Account
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
