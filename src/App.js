import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

//components
import Navigation from './components/Navigation';
import products from './data/products.json';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './components/PageNotFound';

// mock data
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Example shop</h1>
        <Navigation />
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
          <Route exact path="/404" component={PageNotFound} />
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
