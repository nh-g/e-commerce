import categoriesData from "./categories.json";
import homeProductData from "./homeProduct.json"
import MappingList from "../../shared/MappingList.jsx";
import Hero from "./Hero.jsx";
import HomeProduct from './HomeProduct'
import CategoryMasonry from "./CategoryMasonry";

export default function HomePage() {
  const homeRow_1 = homeProductData.slice(0,2);
  const homeRow_2 = homeProductData.slice(2,5);
  const homeRow_3 = homeProductData.slice(homeProductData.length-1);

  return (
    <div className="home">
      <Hero />
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
  );
}
