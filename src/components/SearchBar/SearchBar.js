import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ items, setFilteredItems }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    const filteredItems = items.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredItems(filteredItems);
  };
  return (
    <div className="SearchBar">
      <input
        value={input}
        onChange={handleChange}
        type="text"
        placeholder="Search by item name"
      />
    </div>
  );
};

export default SearchBar;
