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
        <Form.Label>Address</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="1234 Test St"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Apartment No"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Apartment Name"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label></Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Complex Security Code"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Kingwood" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="State" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="77336" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid zip.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>Home Phone</Form.Label>
        <Form.Control type="text" placeholder="123" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="123" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="7733" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid zip.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>Work Phone</Form.Label>
        <Form.Control type="text" placeholder="123" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="123" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="7733" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid zip.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>Cell Phone</Form.Label>
        <Form.Control type="text" placeholder="123" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="123" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="7733" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid zip.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>

  </Form>
  );
}

export default FormExample;
