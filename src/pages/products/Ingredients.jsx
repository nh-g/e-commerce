export default function Ingredients({ product }) {
  const ItemIngredients = product.ingredients.map((ingredient) => {
    return (
      <div key={ingredient} className="pill ingredients">
        {ingredient}
      </div>
    );
  });

  return (
    <section className="section-ingredients">
    {ItemIngredients}
    </section>
  );
}
