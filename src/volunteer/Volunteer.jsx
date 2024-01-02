import React from 'react'
import { Container , Row, Col, Image ,Button , Card } from 'react-bootstrap'
import "../home/Home.css";
import "../donate/donate.css"
import donate2 from "../img/donate2.jpg";
import donate3 from "../img/donate3.jpg";
import { volunteer } from '../data';


const Volunteer = () => {
  return (
  <Container fluid className="mt-5">
     <Container fluid className=" bg-light mt-3 p-4">
        <div className="row">
          <div className="col-sm-6">
          <div className="image-stack">
          <div className="image-stack__item image-stack__item--top">
            <img src={donate2} alt="" />
          </div>
          <div className="image-stack__item image-stack__item--bottom">
            <img src={donate3} alt="" />
          </div>
        </div>
          </div>
          <div className="col-sm-6">
          <div className="pt-4">
                <h5 className='text-center pt-5 text-sm'>Volunteer Today!</h5>
                <p className="text-center">“I’ve been doing Meals on Wheels for 2-3 years now. I absolutely love the experience of meeting the clients and building up a rapport. It also gives me the experience of getting out of my house for a little mingling. It improves days for clients with a double benefit for me.”</p>
              <p className='text-center'>– Dianne, Volunteer</p>
              </div>
          </div>
        </div>
      </Container>
      <Container>
       <h5 className='mt-4'> " Volunteers are crucial to all our programs in providing services to seniors in need. Here is how you can help:"</h5>
      
   <Row className='mb-5'>
     {volunteer.map((v) => (
    <Col md={4} key={v.id}>
          
         <Card className='p-5 shadow'>
          <Card.Title><b>{v.title}</b></Card.Title>
          <ul>{v.description.map((d) => <li>{d}</li>)}</ul>
          <Button variant="warning" onClick={() => console.log("Primary")} className='w-100'>
            Join Now
          </Button>
          </Card>
          </Col>
      
     ))}
            </Row> 
      </Container>
        
   </Container>
  )
}

export default Volunteer