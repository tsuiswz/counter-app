import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './logo192.png';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav-links">
        <Link to="/">
          <img src={logo} alt="Logo" width="20" height="20" />
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {

//   }
// }

export default NavBar;
