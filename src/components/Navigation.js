import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const SelectedLink = { fontWeight: "bold", color: "green" };

  return (
    <nav>
      <ul>
        <li>
          <NavLink activeStyle={SelectedLink} exact to="/">
            Go to homepage
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={SelectedLink} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={SelectedLink} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={SelectedLink} to="/contact-us">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
