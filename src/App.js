import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import './styles/app.css';

function App() {

  return (
    <div className="App">
      <Router>
        <h1>Example shop</h1>
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
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/products">
            <h1>Products</h1>
          </Route>
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
          <Route exact path="/contact-us">
            <h1>Contact us</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
