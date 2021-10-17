import React from "react";
import { useParams } from "react-router-dom";

import products from "../data/products.json";

import "../styles/product-details.css";

const ProductDetails = () => {
  const { id } = useParams();

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <div className="product-list-wrap">
      <div className="product-item-wrap">
        <div className="product-list-header">
          <div>{selectedProduct.title}</div>
        </div>
        <div>Rating: {selectedProduct.rating}</div>
        <div>Description: {selectedProduct.description}</div>
        <div>Type: {selectedProduct.type}</div>
        <div>Weight: {selectedProduct.weight}g</div>
        <div>£{selectedProduct.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductDetails;