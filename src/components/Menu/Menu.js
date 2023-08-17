import Items from '../Items/Items';
import SearchBar from '../SearchBar/SearchBar';
import './Menu.css';

const Menu = ({ filteredItems, handleAddToOrder, items, setFilteredItems }) => {
  return (
    <div className="Menu">
      <SearchBar items={items} setFilteredItems={setFilteredItems} />
      <Items handleAddToOrder={handleAddToOrder} items={filteredItems} />
    </div>
  );
};

export default Menu;
