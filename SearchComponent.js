import React, { useState } from 'react';
import data from './data.json';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filteredResults = data.filter((item) =>
      item.nombre.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar nombres..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;