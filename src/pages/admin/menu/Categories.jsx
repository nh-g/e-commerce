// NPM Packages
import { useState } from 'react';

// Project files
import useFetch from '../../../hooks/useFetch';
import ItemCategory from "./ItemCategory";
import MappingList from '../../../shared/MappingList';
import CreateCategory from '../CreateCategory';
import ButtonAdd from '../../../shared/ButtonAdd';

export default function Categories() {
  // Hooks
  const categoriesFireBase = useFetch("categories");
  const categoriesData = categoriesFireBase.data;

  const [toggler, setToggler] = useState(false);

  return (
    <div className="menu">
      <section className="page-hero">
        <ButtonAdd label="Category" toggler={toggler} setToggler={setToggler} />

        <h1>MENU</h1>
        
        <small className="section-description">
          Award-winning menu with regional inspiration, featuring smoked meats,
          homemade sauces, and from scratch sides
        </small>
      </section>

      {toggler && <CreateCategory setToggler={setToggler} />}

      {!toggler && (
        <MappingList getData={categoriesData} Component={ItemCategory} />
      )}
    </div>
  );
}
