import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import FormCostumerInformation from './FormCostumerInformation';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';


  function BasicExample() {
  return (

    <Accordion defaultActiveKey="0">

    <Accordion.Item eventKey="0">
      <Accordion.Header>Enter the costumer information</Accordion.Header>
      <Accordion.Body>

     <>
<FormCostumerInformation/>
</>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
      <Accordion.Header>Enter Sale Number</Accordion.Header>
      <Accordion.Body>

      <>
      <Form/>
      </>

      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header>Enter Receipt Number</Accordion.Header>
      <Accordion.Body>
      
      <>
      <Form2/>
      </>

      </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="3">
      <Accordion.Header>Enter Quote </Accordion.Header>
      <Accordion.Body>

      <>
      <Form3/>
      </>

      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
      <Accordion.Header>Enter Item information </Accordion.Header>
      <Accordion.Body>

      <>
      <Form4/>
      </>

      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="5">
      <Accordion.Header>Merchant Service Transaction# </Accordion.Header>
      <Accordion.Body>

      <>
      <Form5/>
      </>

      </Accordion.Body>
    </Accordion.Item>




  </Accordion>


  )
}

export default BasicExample;