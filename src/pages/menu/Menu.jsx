// Project files
import useFetch from '../../hooks/useFetch';
import categoriesData from './categories.json';
import CategoryMasonry from './CategoryMasonry';
import MappingList from '../../shared/MappingList';
export default function Menu() {
  // Hooks
  const categoriesFireBase = useFetch("categories");
  const categoriesData = categoriesFireBase.data;

  return (
    <div className="menu">
      <h1>MENU</h1>
      <MappingList getData={categoriesData} Component={CategoryMasonry} />
    </div>
  );
}
