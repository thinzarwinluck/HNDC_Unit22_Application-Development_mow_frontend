import React, { useState, useEffect } from 'react';
import axios from 'axios';
import service from '../api/apiFetching';
import { Button , Table , Container , Modal ,Form} from 'react-bootstrap';
const Admin = () => {
  const [usersData, setUserData] = useState([]);
  const [user, setUser] = useState([]);
  const [chooseSelected, setChooseSelected] = useState('');
  const [formType, setFormType] = useState("Volunteer");
  const [id , setId]=useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async(user) => {
    await service.get('/user/getAll').then((response) => {
      setUser(response.data);
    setId(user.ordersId);
    setShow(true);
    })
  }


  const fetchMeals = async () => {
    try {
      const response = await service.get('/order/getAll');
      let user = null;
      const userIdString = localStorage.getItem('user_id');
      const userIdNumber = parseInt(userIdString, 10);
  
      switch (localStorage.getItem('user_role')) {
        case 'member':
          user = response.data.filter((item) => item.user.usersId === userIdNumber);
          break;
  
        case 'Volunteer':
          user = response.data.filter((item) => item.volunteer_id === userIdNumber);
          break;
  
        case 'Care-Giver':
          user = response.data.filter((item) => item.caregiver_id === userIdNumber);
          break;
  
        default:
          user = response.data;
          break;
      }
  
      setUserData(user);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };
  
  const addMeal = async () => {
    console.log(chooseSelected);
    const data = {
      volunteer_id: chooseSelected.usersId,
      volunteer_name: chooseSelected.userName,
      caregiver_id: chooseSelected.usersId,
      caregiver_name: chooseSelected.userName,
    };
    if (formType === "Volunteer") {
      await service.put(`/order/assign/volunteer/${id}`, data);
    } else {
      await service.put(`/order/assign/care-giver/${id}`, data);
    }
    await fetchMeals();
  };
  
  useEffect(() => {
    fetchMeals();
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
            <Form.Select
  value={chooseSelected.userName}
  onChange={(e) => {
    const selectedUser = user.find(u => u.userName === e.target.value) || {};
    setChooseSelected(selectedUser);
  }}
  className="w-100"
>
  {user.filter(u => u.role === formType).map((type, index) => (
    <option key={index} value={type.userName}>
      {type.userName}
    </option>
  ))}
</Form.Select>

           
            
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
        <h1 className='pt-3'>Order</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>Order Id </th>
              <th>Meals</th>
              <th>Supported By</th>
              <th>User Name</th>
              <th>User Health Information</th>
              <th>Volunteer Name</th>
              <th>Care-giver Name</th>
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
                  <td>{user.volunteer_name === null ? 'Not Assigned':user.volunteer_name}</td>
                  <td>{user.caregiver_name === null ? 'Not Assigned':user.caregiver_name}</td>
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
