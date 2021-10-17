import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="selected-link" exact to="/">
            Go to homepage
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected-link" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected-link" to="/contact-us">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;