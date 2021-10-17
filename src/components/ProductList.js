import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div>{product.title}</div>
        );
      })}
    </div>
  );
};

export default ProductList;