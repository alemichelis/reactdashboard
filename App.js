import './App.css';
import Accordion from './components/Accordion';
import DropdownExample from './components/DropdownExample';
import Form from './components/Form';
import Tables from './components/Tables';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Link, Routes, Route, BrowserRouter, Outlet, Router, Switch } from 'react-router-dom';
import Search from './components/Search';
import Displays from './components/Displays';
import View from './components/View';
import Layout from './components/Layout';
import Clients from './components/Clients';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonExample from './components/ButtonExample';
import SearchComponent from './components/SearchComponent';
import Register from './components/register';

export default function App() {
  const toPage = page => () => {
    // setPage(page)
  }

  const [componenteActual, setComponenteActual] = useState('Search');

  const cambiarComponente = (componente) => {
    setComponenteActual(componente);
  };

  let contenidoActual;
  if (componenteActual === 'Search') {
    contenidoActual = <Search />;
  } else if (componenteActual === 'View') {
    contenidoActual = <View />;
  } else if (componenteActual === 'Clients') {
    contenidoActual = <Clients />;
  }



  return (

    <BrowserRouter>





      <div className="order">
        <Header />
        <h1>Buscar Nombres</h1>
      <SearchComponent />
      < Register/>
        <ButtonExample />
      </div>
      <header>

        <div className="button-container">

          <div className="button-container1">

            <Link to='/clients'>
              <Button type="button" class="btn btn-primary" onClick={() => cambiarComponente('Clients')}> Search Costumer</Button>
            </Link>
          </div>

          <div className="button-container2">

            <Link to='/customerInfo?custId=123'>
              <Button type="button" class="btn btn-primary" onClick={() => cambiarComponente('Search')}> Applicant information</Button>
            </Link>
          </div>

          <div className="button-container3">
            <Link to='/view'>
              <Button type="button" class="btn btn-primary" onClick={() => cambiarComponente('View')}>View all Sales</Button>
            </Link>

          </div>
        </div>
      </header>

      <main>
        {contenidoActual}
      </main>



    </BrowserRouter>




  );
}
