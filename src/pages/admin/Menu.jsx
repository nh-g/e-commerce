// NPM Packages
import { useState } from 'react';

// Project files
import useFetch from '../../hooks/useFetch';
import CategoryMasonry from './CategoryMasonry';
import MappingList from '../../shared/MappingList';
import CreateCategory from './CreateCategory';

export default function Menu() {
  // Hooks
  const categoriesFireBase = useFetch("categories");
  const categoriesData = categoriesFireBase.data;

  const [toggler, setToggler] = useState(false);

  // // Methods
  // function editList(editedItem) {
  //   const index = list.findIndex((item) => item.id === editedItem.id);
  //   const clonedList = [...list];

  //   clonedList[index] = editedItem;
  //   setList(clonedList);
  // }

  return (
    <div className="menu">
      <button className="btn-blue" onClick={() => setToggler(!toggler)}>
        Add a category
      </button>

      {toggler && <CreateCategory setToggler={setToggler} />}

      <h1>MENU</h1>

      {!toggler && (
        <MappingList getData={categoriesData} Component={CategoryMasonry} />
      )}
    </div>
  );
}
