import React, { useEffect } from "react";
import heroBanner from "../img/heroBanner.jpg";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import service from "../api/apiFetching";

const Meal = () => {
  const [meals, setMeals] = useState([]);
  const auth_user_role = localStorage.getItem("user_role");
  const auth_user_id = localStorage.getItem("user_id");
  const [formType, setFormType] = useState("Breakfast");
  const [description, setDescription] = useState("");
  const [canProvideColdMeals, setCanProvideColdMeals] = useState(false);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeMeal = () => setCanProvideColdMeals(!canProvideColdMeals);
  const userLatitude = localStorage.getItem("latitude");
  const userLongitude = localStorage.getItem("longitude");
  const addMeal = async () => {
    try {
      const newMeal = {
        name: name,
        description: description,
        coldmeal_available: canProvideColdMeals,
        tag: formType,
      };
      const response = await service.post(
        `/save/meal/${auth_user_id}`,
        newMeal
      );
      if (response.status === 200) {
        meals.push(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //calculat the user distance
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in kilometers
    return distance;
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  const orderMeal = async (meal) => {
    console.log(meal);
    const distance = calculateDistance(
      userLatitude,
      userLongitude,
      meal.user.latitude,
      meal.user.longitude
    );
    if (distance > 10) {
      alert(
        meal.coldmeal_available
          ? "Your distance is more than 10km. You can order cold meal"
          : "I'm Sorry! You can't get any meal for this menu because your location is more than 10km "
      );
    }
    if ((distance > 10 && meal.coldmeal_available) || distance < 10) {
      await service
        .post(`/order/save/user/${auth_user_id}/meal/${meal.id}`, {
          meal_id: meal.id,
        })
        .then((response) => {
          alert("Meal ordered successfully");
        })
        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await service.get("/meals");
        setMeals(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    getMeals();
  }, []);

  return (
    <Container fluid className="mt-5">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Meal </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Meal Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter meal description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="role">
              <Form.Select
                style={{ fontSize: "14px" }}
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
                className="w-100"
              >
                {["Breakfast", "Lunch", "Dinner"].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="gender">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Can Provide Cold Meals for users who are more than 10 km?"
                style={{ fontSize: "14px" }}
                checked={canProvideColdMeals}
                onChange={handleChangeMeal}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addMeal()}>
            Create Meal
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="herobanner"
        style={{ backgroundImage: `url('${heroBanner}')` }}
      >
        <div className="pt-5">
          <Card className="w-50 ml-auto p-5 mt-6 text-white mr-auto non-color d-none d-md-block">
            <h2 className="text-center blockquote">Meal Donation Spotlight:</h2>

            <p className="text-center">
              Empowering our community with love and nourishment. Your
              generosity feeds countless souls and warms our hearts. Thank you
              for making a differencal.
            </p>
            {auth_user_role === "Partner" && (
              <div className="d-flex justify-content-center">
                <Button variant="warning" onClick={handleShow}>
                  Register Meal to Support
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
      <h4 className="mt-4 text-center mb-2">
        {" "}
        "Available Meals for This Week:"
      </h4>
      {meals.length && (
        <>
          <Container>
            <h5 className="mt-4 mb-2"> "Breakfast Menu"</h5>
            <Row className="mb-5">
              {meals
                .filter((meal) => meal.tag === "Breakfast")
                .map((meal) => (
                  <Col md={4} key={meal.id}>
                    <Card className="p-5 shadow">
                      <Card.Title>
                        <b>{meal.name}</b>
                      </Card.Title>
                      <p>{meal.description}</p>
                      <p>
                        Location :{" "}
                        {meal.user !== null ? meal.user.location : Yangon}
                      </p>
                      <p>Contact No : {meal.user.phone}</p>
                      <p>Donated By : {meal.user.userName}</p>

                      {parseInt(meal.user.usersId) === parseInt(auth_user_id) &&
                        auth_user_role === "Partner" && (
                          <Button
                            variant="warning"
                            onClick={() => handleEdit(meal)}
                            className="w-100"
                          >
                            Edit
                          </Button>
                        )}
                      {auth_user_role === "member" && (
                        <Button
                          variant="warning"
                          onClick={() => orderMeal(meal)}
                          className="w-100"
                        >
                          Order Now
                        </Button>
                      )}
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
          <Container>
            <h5 className="mt-4 mb-2"> "Lunch Menu"</h5>
            <Row className="mb-5">
              {meals
                .filter((meal) => meal.tag === "Lunch")
                .map((meal) => (
                  <Col md={4} key={meal.id}>
                    <Card className="p-5 shadow">
                      <Card.Title>
                        <b>{meal.name}</b>
                      </Card.Title>
                      <p>{meal.description}</p>
                      <p>Location : {meal.user.location}</p>
                      <p>Contact No : {meal.user.phone}</p>
                      <p>Donated By : {meal.user.userName}</p>
                      {parseInt(meal.user.usersId) === parseInt(auth_user_id) &&
                        auth_user_role === "Partner" && (
                          <Button
                            variant="warning"
                            onClick={() => handleEdit(meal)}
                            className="w-100"
                          >
                            Edit
                          </Button>
                        )}
                      {auth_user_role === "member" && (
                        <Button
                          variant="warning"
                          onClick={() => orderMeal(meal)}
                          className="w-100"
                        >
                          Order Now
                        </Button>
                      )}
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
          <Container>
            <h5 className="mt-4 mb-2"> "Dinner Menu"</h5>
            <Row className="mb-5">
              {meals
                .filter((meal) => meal.tag === "Dinner")
                .map((meal) => (
                  <Col md={4} key={meal.id}>
                    <Card className="p-5 shadow">
                      <Card.Title>
                        <b>{meal.name}</b>
                      </Card.Title>
                      <p>{meal.description}</p>
                      <p>Location : {meal.user.location}</p>
                      <p>Contact No : {meal.user.phone}</p>
                      <p>Donated By : {meal.user.userName}</p>
                      {parseInt(meal.user.usersId) === parseInt(auth_user_id) &&
                        auth_user_role === "Partner" && (
                          <Button
                            variant="warning"
                            onClick={() => handleEdit(meal)}
                            className="w-100"
                          >
                            Edit
                          </Button>
                        )}
                      {auth_user_role === "member" && (
                        <Button
                          variant="warning"
                          onClick={() => orderMeal(meal)}
                          className="w-100"
                        >
                          Order Now
                        </Button>
                      )}
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </>
      )}
    </Container>
  );
};

export default Meal;
