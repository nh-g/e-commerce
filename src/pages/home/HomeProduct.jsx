import ImageLoader from "../../shared/ImageLoader";

export default function HomeProduct({ item }) {
  const { title, imageURL, price, rating } = item;

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🔥</p>
            ))}
        </div>
      </div>

      <ImageLoader filePath={imageURL} />

      <span className="cta">Add to Cart</span>
    </div>
  );
}
