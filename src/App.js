import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Example shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Go to homepage
              </Link>
            </li>
            <li>
              <Link to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                Contact
              </Link>
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
