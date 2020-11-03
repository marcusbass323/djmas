import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div className="Contact">
      <Form id="form" action="mailto:bass.marcus@icloud.com" method="get" enctype="text/plain">
        <h1 id="contactHeader" className="headerTitle">Submit a Booking Request</h1>
        <Form.Group controlId="ControlInput1">
          <div>
            <Form.Label>Email address:</Form.Label>
          </div>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="ControlInput2">
          <div>
            <Form.Label>Phone Number:</Form.Label>
          </div>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group controlId="ControlTextarea1">
          <div>
            <Form.Label>Event Details:</Form.Label>
          </div>
          <Form.Control as="textarea" rows="20" />
        </Form.Group>
        <button type="submit" id="btnSubmit" >Submit</button>
      </Form>
    </div>
  )
}
