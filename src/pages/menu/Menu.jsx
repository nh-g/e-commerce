// Project files
import useFetch from '../../hooks/useFetch';
import CategoryMasonry from './CategoryMasonry';
import MappingList from '../../shared/MappingList';

export default function Menu() {
  // Hooks
  const categoriesFireBase = useFetch("categories");
  const categoriesData = categoriesFireBase.data;

  

  return (
    <div className="menu">
      <section className="page-hero">
        <h1>MENU</h1>

        <small className="section-description">
          Award-winning menu with regional inspiration, featuring smoked meats,
          homemade sauces, and from scratch sides
        </small>
      </section>
      <MappingList getData={categoriesData} Component={CategoryMasonry} />
    </div>
  );
}

