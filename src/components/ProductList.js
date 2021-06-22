import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  const productListWrap = {
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const productListHeader = {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "10px",
  };

  const productItemWrap = {
    border: "2px solid black",
    padding: "10px",
    marginBottom: "30px",
  };

  return (
    <div style={productListWrap}>
      {products.map((product) => {
        return (
          <div key={product.id} style={productItemWrap}>
            <div style={productListHeader}>
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
