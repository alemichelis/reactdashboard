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
          placeholder="#Years at current address"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Own"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
            <Form.Check
          required
          label="Rent"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
            <Form.Check
          required
          label="Board With"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder=""
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Monthly income"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Monthly Mortgage or Rent Payment"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Mortgage Company"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Home Value"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      
    </Row>

  </Form>
  );
}

export default FormExample;
