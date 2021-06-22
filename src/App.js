import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/products">
        <h1>Products</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      <Route path="/contact-us">
        <h1>Contact us</h1>
      </Route>
    </Router>
    </div>
  );
}

export default App;
