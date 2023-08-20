import { useState } from 'react';
import Items from '../Items/Items';
import SearchBar from '../SearchBar/SearchBar';
import './Menu.css';

const Menu = ({ items, handleAddToOrder }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  const renderContent = () => {
    if (!filteredItems.length) {
      return <div className="Menu__no-content">No items found!</div>;
    }

    return <Items items={filteredItems} handleAddToOrder={handleAddToOrder} />;
  };

  return (
    <div className="Menu">
      <SearchBar value={query} onChange={handleSearchChange} />
      {renderContent()}
    </div>
  );
};

export default Menu;
