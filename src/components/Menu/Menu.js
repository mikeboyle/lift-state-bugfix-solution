import Items from '../Items/Items';
import SearchBar from '../SearchBar/SearchBar';
import './Menu.css';

const Menu = ({ filteredItems, items, order, setOrder, setFilteredItems }) => {
  return (
    <div className="Menu">
      <SearchBar items={items} setFilteredItems={setFilteredItems} />
      <Items items={filteredItems} order={order} setOrder={setOrder} />
    </div>
  );
};

export default Menu;
