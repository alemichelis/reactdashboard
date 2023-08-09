import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

  
  function Example() {
    return (
      <div className='back'>
        <div className='search'>
          <h1>Search Customer:jill rabbit</h1>
          </div>
          <Badge id='badge' as={Button}>
            Back
          </Badge>
      </div>
    );
  }
  
  export default Example;
