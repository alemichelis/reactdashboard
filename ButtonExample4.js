import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function Example() {
  return (
      <><>
      <Badge id='badge' as={Button}>
       Save Changes
      </Badge>
    </><>
        <Badge id='badge' as={Button}>
          Reset
        </Badge>
      </><>
       <Badge id='badge' as={Button}>
      Resale Certificate
     </Badge>
 </></>
  );
}

export default Example;
