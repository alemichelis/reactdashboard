import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Customer Account Actions
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Create New Sale</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Create Special Service Memo</Dropdown.Item>
        <Dropdown.Item href="#/action-3">File Notes</Dropdown.Item>
        <Dropdown.Item href="#/action-4">View Store Credits</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Access InHouse Account</Dropdown.Item>
        <Dropdown.Item href="#/action-6">View Revolving Statements</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Apply for Okinus Account</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;