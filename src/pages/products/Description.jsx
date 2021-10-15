import React from "react";

export default function Description({ product }) {
  return (
    <section className="section-product_description">
      <h2>{product.title}</h2>
      <div className="price">
        <h2>{product.price} Kr</h2>
      </div>

      <img alt="img" src={product.imageURL} />
      <p>{product.description}</p>
    </section>
  );
}
