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
          placeholder="DL State"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="DL Number"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="DL Exp"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      
    </Row>

  </Form>
  );
}

export default FormExample;
