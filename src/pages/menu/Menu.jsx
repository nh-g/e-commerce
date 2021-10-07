import categoriesData from './categories.json';
import CategoryMasonry from './CategoryMasonry';
import MappingList from '../../shared/MappingList';
export default function Menu() {
    return (
      <div className="menu">
        <h1>MENU</h1>
        <MappingList getData={categoriesData} Component={CategoryMasonry} />
      </div>
    );
}
