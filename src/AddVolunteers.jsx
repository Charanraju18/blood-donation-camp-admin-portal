import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';   //included in your App component

const AddVolunteers = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    typeOfVolunteer: "",
    id: "",
    phoneNumber: "",
    branch: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handling
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      // Log the form data (for demo purposes)
      console.log(formData);

      // Reset form after successful submission
      setFormData({
        name: "",
        typeOfVolunteer: "",
        id: "",
        phoneNumber: "",
        branch: "",
      });
      setValidated(false); // Clear validation state
    }
  };

  return (
    <Container fluid className="form-container d-flex justify-content-center align-items-center" >
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4 form-box" style={{ maxWidth: "600px" }}> 
        <h3 className="text-center mb-4">Volunteer Registration Form</h3>
         
        <Col className="mb-3"> 
          {/* Name Field */}
          <Form.Group as={Col}  controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Type of Volunteer Field */}
          <Form.Group as={Col}  controlId="typeOfVolunteer">
            <Form.Label>Type of Volunteer</Form.Label>
            <Form.Control
              required
              as="select"
              name="typeOfVolunteer"
              value={formData.typeOfVolunteer}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option>Blood Donor</option>
              <option>Event Organizer</option>
              <option>Coordinator</option>
              <option>Other</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select the type of volunteer.
            </Form.Control.Feedback>
          </Form.Group>

          {/* ID Field */}
          <Form.Group as={Col}  controlId="id">
            <Form.Label>ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your ID.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Phone Number Field */}
          <Form.Group as={Col}  controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid 10-digit phone number.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Branch Field */}
          <Form.Group as={Col}  controlId="branch">
            <Form.Label>Branch</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your branch.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        {/* Submit Button */}
        <Button type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddVolunteers;

