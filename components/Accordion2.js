import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import FormCostumerInformation2 from './FormCostumerInformation2';
import Form6 from './Form6';
import Form7 from './Form7';
import Form8 from './Form8';
import Form9 from './Form9';
import Form10 from './Form10';
// import Customer1 from './Customer1.json';
import { useState } from 'react';


  function BasicExample() {
    const [jsonCustomer1, setJsonCustomer1] = useState({});

  return (

    <Accordion defaultActiveKey="0">

    <Accordion.Item eventKey="0">
      <Accordion.Header>Customer Information</Accordion.Header>
      <Accordion.Body>

     <>
<FormCostumerInformation2/>
</>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
      <Accordion.Header>Contact Information</Accordion.Header>
      <Accordion.Body>

      <>
      <Form6/>
      </>

      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header>Driver´s License information</Accordion.Header>
      <Accordion.Body>
      
      <>
      <Form7/>
      </>

      </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="3">
      <Accordion.Header>Employment information</Accordion.Header>
      <Accordion.Body>

      <>
      <Form8/>
      </>

      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
      <Accordion.Header>Housing and income</Accordion.Header>
      <Accordion.Body>

      <>
      <Form9/>
      </>

      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="5">
      <Accordion.Header>Reference information</Accordion.Header>
      <Accordion.Body>

      <>
      <Form10/>
      </>

      </Accordion.Body>
    </Accordion.Item>




  </Accordion>


  )
}

export default BasicExample;