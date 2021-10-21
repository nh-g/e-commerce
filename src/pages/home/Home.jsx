import MappingList from "../../shared/MappingList.jsx";
import homeProductData from "./products.json";
import Hero from "./Hero.jsx";
import HomeProduct from "../category/ProductCard";
import useFetch from "../../hooks/useFetch.js";
export default function HomePage() {
  const products = useFetch("products");
  const featuredProduct = getRandom(products.data, 6);


  function getRandom(array, length) {
    // safeguard
    if (array.length < length) {
      console.warn("You are trying to get more items than available");
      length = array.length;
    }
    const clonedArray = [...array];
    const shuffled = clonedArray.sort(() => 0.5 - Math.random());
    const randomCandidates = shuffled.slice(0, length);

    return randomCandidates;
  }

  const homeRow_1 = featuredProduct.slice(0, 2);
  const homeRow_2 = featuredProduct.slice(2, 5);
  const homeRow_3 = featuredProduct.slice(featuredProduct.length - 1);

  return (
    <>
      <Hero />
      <div className="home">
        <div className="spacer intro" />

        <div className="home__container">
          <div className="home__row">
            <MappingList getData={homeRow_1} Component={HomeProduct} />
          </div>
          <div className="home__row">
            <MappingList getData={homeRow_2} Component={HomeProduct} />
          </div>
          <div className="home__row">
            <MappingList getData={homeRow_3} Component={HomeProduct} />
          </div>
        </div>
      </div>
    </>
  );
}
