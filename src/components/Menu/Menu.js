import { useState } from 'react';

import Items from '../Items/Items';
import SearchBar from '../SearchBar/SearchBar';
import './Menu.css';

const Menu = ({ handleAddToOrder, items }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="Menu">
      <SearchBar value={query} onChange={handleSearchChange} />
      <Items handleAddToOrder={handleAddToOrder} items={filteredItems} />
    </div>
  );
};

export default Menu;
