// NPM packages
import { useParams } from "react-router-dom";

// Project files
import useFetch from "../hooks/useFetch";
import ButtonBack from "../shared/ButtonBack";
import ProductCard from "./category/ProductCard";
export default function SearchResult() {
  const { query } = useParams();

  const products = useFetch("products");
  const data = products.data;

  // const filterByTitle = filterList(data, "title", query);

  const filterByDescription = filterList(data, "description", query);

  function filterList(array, key, query) {
    const filteredList = array.filter((item) =>
      item[key].toUpperCase().includes(query.toUpperCase())
    );

    return filteredList;
  }

  const searchResults = [...filterByDescription];

  const FilteredProducts = searchResults.map((item, index) => (
    <ProductCard key={index} item={item} />
  ));

  return (
    <div id="results" className="page">
      <header>
        <h2>
          We found {searchResults.length} products that matched your search "{query}"
        </h2>
      </header>

      <div className="section-products">
        {searchResults.length > 0 ? (
          FilteredProducts
        ) : (
          <h2 style={{ textAlign: "center" }}>
            Sorry we cannot find the product.
          </h2>
        )}
      </div>

      <footer className="footer">
        <ButtonBack label="Go back" />
      </footer>
    </div>
  );
}
