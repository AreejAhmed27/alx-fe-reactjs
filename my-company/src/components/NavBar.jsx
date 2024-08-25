import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const listyle = {
        marginRight: '20px'
    };
  return (
    <nav style = {{ backgroundColor: 'black', 
        padding: '1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'}}>

      <ul style = {{ listStyle: 'none', margin: '0px', padding: '0px', display: 'flex' }}>
        <li style = {listyle}>
          <Link to="/">Home</Link>
        </li>
        <li style = {listyle}>
          <Link to="/about">About</Link>
        </li>
        <li style = {listyle}>
          <Link to="/services">Services</Link>
        </li>
        <li style = {listyle}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;