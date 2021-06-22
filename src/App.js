import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

//components
import products from './data/products.json';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './components/PageNotFound';

// mock data
import ProductList from "./components/ProductList";

function App() {
  const SelectedLink = { fontWeight: "bold", color: "green" };

  return (
    <div className="App">
      <Router>
        <h1>Example shop</h1>
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
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/products">
            <ProductList products={products} />
          </Route>
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
          <Route exact path="/contact-us">
            <h1>Contact us</h1>
          </Route>
          <Route exact path="/product/:id">
            <ProductDetails />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
