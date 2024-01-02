import React from "react";
import heroBanner from "../img/heroBanner.jpg";
import { NavLink } from "react-router-dom";
import { Button, Card, Image, Container } from "react-bootstrap";
import { aboutUs, logo } from "../data";

import "./Home.css";

const Home = () => {
  return (
    <Container fluid className="mt-5">
      <div
        className="herobanner"
        style={{ backgroundImage: `url('${heroBanner}')` }}
      >
        <div className="pt-5">
          <Card className="w-50 ml-auto p-5 mt-6 text-white mr-auto non-color d-none d-md-block">
            <h2 className="text-center blockquote">
              Welcome to our Meals on Wheels
            </h2>
            <p className="text-">
              Friendly volunteers and staff helping vulnerable seniors and
              people with disabilities stay healthy at home with nutritious
              meals delivered to their door.
            </p>
            <div className="d-flex justify-content-center">
              <NavLink to="/register" className="mr-2">
                <Button variant="warning">Explore Meals</Button>
              </NavLink>
              <NavLink to="/register">
                <Button variant="secondary">Become a Volunteer</Button>
              </NavLink>
            </div>
          </Card>
        </div>
      </div>

      <Container fluid bg="light" className="mt-3 p-4">
        <div className="row">
          <div className="col-6">
            <Image
              src="https://assets-global.website-files.com/5bfd5ccdddc00c144ef694a4/5c0ada724c722d379ba970dd_0145C7A6EF96D182A793DAA184BF460FFE-main-article-7363.jpeg"
              alt=""
              className="ml-5"
              width="80%"
              rounded
            />
          </div>
          <div className="col-6">
            <h3 className="text-left pt-4">How We Help?</h3>
            <p>
              Our essential service plays an important role in early
              intervention and health prevention, allowing older Australians to
              live in their homes for longer. We do this through our incredible
              45,000 volunteer workforce who form meaningful connections with
              Meals on Wheels customers, enable them to live independently and
              age well and provide valuable peace-of-mind to their loved ones.
            </p>
            <Button href="/donate" variant="warning">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      <Container fluid className="bg-non mt-3">
        <h3 className="text-center pt-4">About Us</h3>
        <div className="row p-4">
          {aboutUs.map((item) => (
            <div className="col-sm-4 text-center" key={item.src}>
              <div className="section3_image">
                <img className="section3Image" src={item.src} alt="" />
              </div>
              <div className="pt-4">
                <h5>{item.title}</h5>
                <p className="text-left">{item.about}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container className="p-5">
        <div className="text-center">
          <h3>200+ Partner Agencies in MerryMeal</h3>
          <p>
            Here are some of the over two hundred agencies that deliver Meals on
            Wheels programs across MerryMeal.
          </p>
        </div>

        <div className="row ml-5">
          {logo.map((item) => (
            <Image className="p-3" src={item} alt={item} width="120" />
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Home;
