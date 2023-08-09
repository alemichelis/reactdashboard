import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Last Name"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="First Name"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
       
        <Form.Control
          required
          type="text"
          placeholder="Phone Number"
          defaultValue=""
        />
        <Form.Label>Format: 123-456-7890</Form.Label>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Relation"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      
    </Row>

  </Form>
  );
}

export default FormExample;
