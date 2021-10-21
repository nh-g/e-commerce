import React from "react";

export default function Description({ product }) {
  return (
    <section className="section-product_description">
      <div className="price">
        <h3> ${product.price} </h3>
      </div>

      <h1>{product.title}</h1>

      <small>{product.description}</small>
    </section>
  );
}
