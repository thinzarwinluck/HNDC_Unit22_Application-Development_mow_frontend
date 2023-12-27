import React from "react";
import { useState } from "react";
import "../home/Home.css";
import baseApi from "../api/apiFetching";
import axios from "axios";
import {
  Container,
  Button,
  Image,
  Form,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../img/logo.png";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setName] = useState("");
  const [age, setAge] = useState("");
  const [reTypepassword, setRetypePassword] = useState("");
  async function login(event) {
    try {
      event.preventDefault();

      const data = {
        userName: userName,
        password: reTypepassword,
        email: email,
        age: age,
        location: "Hlaing",
      };
        await baseApi.post("/register", data).then(response => {
          if (response.status === 201) {
            window.location.href = "/login";
          }
        })
      } catch (error) {
        console.error("Login failed:", error.message);
      }
    
  }

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
              {/* <h4 className="text-center">Login In</h4> */}

              <Form className="mt-3" onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    value={userName}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Retype Password"
                    value={reTypepassword}
                    onChange={(e) =>
                      setRetypePassword(
                        e.target.value === password
                          ? e.target.value
                          : console.log("password not match")
                      )
                    }
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
                      Have Account Login!!
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
