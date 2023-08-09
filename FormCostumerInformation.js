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
    <Form className='form-font' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className='form-font'></Form.Label>
          <Form.Control className='form-font'
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback className='form-font'>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='form-font'></Form.Label>
          <Form.Control type="text" placeholder="SNN (ex.00000000)" required />
          <Form.Control.Feedback className='form-font' type="invalid">
            Please provide a valid item.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Phone Number (ex.99999999)" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid item.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      {/* <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
      <div className='form-buttons'>
        <div className='form-buttons1'>
          <Button type="submit">Submit</Button>
        </div>
        <Row className="mb-3">
        </Row>
        <div className='form-buttons2'>
          <Button type="submit">Reset</Button>
        </div>
      </div>
    </Form>
  );
}

export default FormExample;