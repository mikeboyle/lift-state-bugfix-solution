import Items from '../Items/Items';
import SearchBar from '../SearchBar/SearchBar';
import './Menu.css';

const Menu = ({ handleAddToOrder, handleSearchChange, items, query }) => {
  return (
    <div className="Menu">
      <SearchBar value={query} onChange={handleSearchChange} />
      <Items handleAddToOrder={handleAddToOrder} items={items} />
    </div>
  );
};

export default Menu;
