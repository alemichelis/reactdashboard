import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function Example() {
  return (
      <><>
      <Badge id='badge' as={Button}>
        Applicant
      </Badge>
    </><>
        <Badge id='badge' as={Button}>
          Co-Applicant
        </Badge>
      </></>

  );
}

export default Example;
