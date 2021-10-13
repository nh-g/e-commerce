// NPM Packages
import { useState } from 'react';
// Project files
import useFetch from '../../hooks/useFetch';
import categoriesData from './categories.json';
import CategoryMasonry from './CategoryMasonry';
import MappingList from '../../shared/MappingList';
import CreateCategory from '../admin/CreateCategory';
export default function Menu() {
  // Hooks
  const categoriesFireBase = useFetch("categories");
  const categoriesData = categoriesFireBase.data;

  const [toggler, setToggler] = useState(false);

  return (
    <div className="menu">
      <button className="btn-blue" onClick={() => setToggler(!toggler)}>
        Add a category
      </button>

      {toggler && <CreateCategory setToggler = {setToggler}/>}
      <h1>MENU</h1>
      {!toggler && (
        <MappingList getData={categoriesData} Component={CategoryMasonry} />
      )}
    </div>
  );
}
