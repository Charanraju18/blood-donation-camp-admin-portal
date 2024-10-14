import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import './StudentDonor.css';
///npm install bootstrap
///import 'bootstrap/dist/css/bootstrap.min.css'; keep this inside app.jsx or main.jsx
const OtherDonor = () => {
  const [validated, setValidated] = useState(false);
  const [showLottie, setShowLottie] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    venue: "",
    bloodGroup: "",
    gender: "",
    timesDonatedInCampus: "",
   timesDonatedOutsideCampus: "",
  });
  const validateEmail = (email) => { //check one time
    const domainPattern = /^[\w-\.]+@(gmail\.com|acoe\.edu\.in|acet\.edu\.in|au\.in|aec\.edu\.in)$/;
    return domainPattern.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault(); // Prevent page refresh

    if (!validateEmail(formData.email)) {
      setValidated(true);
      return;
    }

    if (formData.timesDonatedOutsideCampus <= 0) {
      setValidated(true);
      return;
    }

    if (formData.timesDonatedInCampus <= 0) {
      setValidated(true);
      return;
    }

    // if ( (formData.name.length > 0 &&formData.name.length <= 8)) {
    //   setValidated(true);
    //   return;
    // }

     if(form.checkValidity() === false) {
      event.stopPropagation(); // Prevent submission if form is invalid
      setValidated(true); // Only set validation state if invalid
    }
    else {
      // Form is valid, log the form data
      console.log(formData);

      // Reset the form data after successful submission
      setFormData({
        name: "",
        mobile: "",
        email: "",
        venue: "",
        bloodGroup: "",
        gender: "",
        timesDonatedInCampus: "",
        timesDonatedOutsideCampus: "",
      });

      // Reset form validation state
      setValidated(false); // Clear validation state after resetting form
    }
  };

     {/* <InputBoxAnimation/> */}

  return (
    <>
      <div className="total-container">
        <Leftside_Div className="left"/>
        <Container fluid className="form-container d-flex justify-content-center align-items-center">
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4 form-box">
            <h3 className="text-center mb-4">Blood Donation Form(Guest/Other)</h3>

    <Row className="mb-3">

    <Form.Group as={Col} xs={12} sm={6} md={6} controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          //  isInvalid={validated && (formData.name.length > 0 &&formData.name.length <= 8)} // This will show invalid state if the length is <= 8
        />
        <Form.Control.Feedback type="invalid">
            Please provide your full name.
          </Form.Control.Feedback>
    </Form.Group>



              <Form.Group as={Col} xs={12} sm={6} md={6} controlId="mobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid mobile number.
                </Form.Control.Feedback>
              </Form.Group>



              <Form.Group as={Col} xs={12} sm={6} md={6} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  isInvalid={validated && !validateEmail(formData.email)}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>



            <Form.Group as={Col} xs={12} sm={6} md={6} controlId="venue">
      <Form.Label>Venue</Form.Label>
      <Form.Control
        required
        as="select" // Change input type to select dropdown
        name="venue"
        value={formData.venue}
        onChange={handleChange}
      >
        <option value="">Choose...</option> {/* Placeholder option */}
        <option value="CB">Cotton Bhavan</option>
        <option value="KLRB">KL Rao Bhavan</option>
        <option value="BGB">Bill Gates Bhavan</option>
        <option value="VSB">Visweswaraya Bhavan</option>
        <option value="CVRB">CV Raman Bhavan</option>
        <option value="RB">Ramanujan Bhavan</option>
        <option value="NB">Abdul Kalam Bhavan</option>
        <option value="AKB">Newton Bhavan</option>
        <option value="ACP">Aditya College of Pharmacy</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Please select a venue.
      </Form.Control.Feedback>
    </Form.Group>



              <Form.Group as={Col} xs={12} sm={6} md={6} controlId="bloodGroup">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>Unknown</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select your blood group.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} xs={12} sm={6} md={6} controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  {/* <option>Other</option> */}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select your gender.
                </Form.Control.Feedback>
              </Form.Group>


      <Form.Group as={Col} xs={12} sm={12} md={12} controlId="timesDonated">
      <Form.Label>No. of Times Donated</Form.Label>
      <Row>
        <Col xs={12} sm={6} md={6}>
          <Form.Control
            required
            type="number"
            placeholder="In Campus"
            name="timesDonatedInCampus"
            value={formData.timesDonatedInCampus}
            isInvalid={validated && (!formData.timesDonatedInCampus || formData.timesDonatedInCampus <= 0)}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {!formData.timesDonatedInCampus
              ? "Please enter the number of times you've donated in campus."
              : "Please enter a valid number."
            }
          </Form.Control.Feedback>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Form.Control
            required
            type="number"
            placeholder="Outside Campus"
            name="timesDonatedOutsideCampus"
            value={formData.timesDonatedOutsideCampus}
            isInvalid={validated && (!formData.timesDonatedOutsideCampus || formData.timesDonatedOutsideCampus <= 0)}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {!formData.timesDonatedOutsideCampus
              ? "Please enter the number of times you've donated outside campus."
              : "Please enter a valid number."
            }
          </Form.Control.Feedback>
        </Col>
      </Row>
            </Form.Group>




            </Row>

            <Button type="submit" className="w-100">Submit</Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default OtherDonor;
