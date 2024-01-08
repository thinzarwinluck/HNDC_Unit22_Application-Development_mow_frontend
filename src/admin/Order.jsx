import React, { useState, useEffect } from 'react';
import axios from 'axios';
import service from '../api/apiFetching';
import { Button , Table , Container , Modal ,Form} from 'react-bootstrap';
const Admin = () => {
  const [usersData, setUserData] = useState([]);
  const [user, setUser] = useState([]);
  const [chooseSelected, setChooseSelected] = useState(null);
  const [formType, setFormType] = useState("Volunteer");
  const [id , setId]=useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async(user) => {
    await service.get('/user/getAll').then((response) => {
      console.log(user)
      setUser(response.data);
    setId(user.ordersId);
    setShow(true);
    })
  }

  const addMeal = async() => {
    console.log(chooseSelected)
    const data = {

      "volunteer_id" : chooseSelected.usersId,
      "volunteer_name" : chooseSelected.userName,
      "caregiver_id": chooseSelected.usersId,
      "caregiver_name": chooseSelected.userName,
      "_.method" : "PUT"
    }
    formType === 'Volunteer' ? await service.put(`/order/assign/volunteer/${id}`,data) : await service.put(`/order/assign/care-giver/${id}`,data)}

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await service.get('/order/getAll');
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    if (user.length > 0) {
      setChooseSelected(user[0]);
    }
    getMeals();
  }, [user]);

  return (
    <Container fluid className="mt-5">
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Meal </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="role">
              <Form.Select
                style={{ fontSize: "14px" }}
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
                className="w-100"
              >
                {["Volunteer", "Care-Giver"].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="user">
              <Form.Select
                style={{ fontSize: "14px" }}
                value={chooseSelected}
                onChange={(e) => setChooseSelected(e.target.value)}
                className="w-100"
              >
                {user.filter(u=>u.role === formType).map((type) => (
                  <option key={type} value={type}>
                    {type.userName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addMeal()}>
            Assign {formType}
          </Button>
        </Modal.Footer>
      </Modal>
        <h1 className='pt-3'>Admin Dashboard</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>Order Id </th>
              <th>Meals</th>
              <th>Supported By</th>
              <th>User Name</th>
              <th>User Health Information</th>
              <th>Volunteer Name</th>
              <th>User Location</th>
              <th>Partner Location</th>
             
            </tr>
          </thead>
          <tbody>
            {usersData.length > 0 ? (
              usersData.map(user => (
                
                <tr key={user.ordersId}>
                    <td>{user.ordersId}</td>
                  <td>{user.meal!== null ? user.meal.name : ''}</td>
                  <td>{user.meal!== null ? user.meal.user.userName : ''}</td>
                  <td>{user.user.userName}</td>
                  <td>{user.user.health}</td>
                  <td>Kyaw Wana</td>
                  <td>{user.user.location}</td>
                  <td>{user.meal!== null ? user.meal.user.location : ''}</td>
                  
                  <td>{localStorage.getItem('user_role') === 'admin' && (  <Button variant="primary" onClick={()=>handleShow(user)}>
                  Assign Volunteer or Care-Giver
                </Button>)}</td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
           
          </tbody>
        </Table>
    
    </Container>
  );
};

export default Admin;
