import React from "react";
import { Link } from "react-router-dom";

import "../styles/product-list.css"

const ProductList = ({ products }) => {
  return (
    <div className="product-list-wrap">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-item-wrap">
            <div className="product-list-header">
              <div>{product.title}</div>
              <div>{product.rating}</div>
            </div>
            <div>{product.description}</div>
            <Link to={`product/${product.id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;