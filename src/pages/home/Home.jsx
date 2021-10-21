import MappingList from "../../shared/MappingList.jsx";
import homeProductData from "./products.json"; 
import Hero from "./Hero.jsx";
import HomeProduct from '../category/ProductCard'

export default function HomePage() {
  const homeRow_1 = homeProductData.slice(0,2);
  const homeRow_2 = homeProductData.slice(2,5);
  const homeRow_3 = homeProductData.slice(homeProductData.length-1);

  return (
    <>
    <Hero />
    <div className="home">
      <div className="spacer intro" />

      {/* <div className="home__container">

        <div className="home__row">
          <MappingList getData={homeRow_1} Component={HomeProduct} />
        </div>
        <div className="home__row">
          <MappingList getData={homeRow_2} Component={HomeProduct} />
        </div>
        <div className="home__row">
          <MappingList getData={homeRow_3} Component={HomeProduct} />
        </div>
        
      </div> */}
    </div>
    </>
  );
}
