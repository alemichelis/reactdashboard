import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link, Routes, Route, BrowserRouter, Outlet, } from 'react-router-dom';

function BasicExample() {
  return (
    <Table striped bordered hover>

      <thead>

          <tr>
            <th>Sale#</th>
            <th>Date</th>
            <Link to='/sale/Receipt?id=saleId&type=1'><th>Receipt Number</th></Link>
            <Link to='/sale/note?id=saleId'><th>Sale Notes</th></Link>
            <Link to='/inventory/delivered?sale=saleId'><th>Status</th></Link>
            <th>View Sale</th>
          </tr>

      </thead>

      <tbody>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th><Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th><Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th><Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th><Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th> <Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th> <Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th> <Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th> <Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th> <Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th> <Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
        <tr>
          <th>Sale#</th>
          <th>01/01/2023</th>
          <th>Receipt #</th>
          <th>View Note</th>
          <th>Balance</th>
          <th> <Badge bg="secondary" as={Button}>
            Select
          </Badge></th>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;