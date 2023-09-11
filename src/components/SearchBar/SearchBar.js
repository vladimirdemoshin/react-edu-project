import React from 'react';

export default function SearchBar({ filterText, inStockOnly }) {
    return (
      <form>
        <input 
          type="text" 
          value={filterText} 
          placeholder="Search..."/>
        <label>
          <input 
            type="checkbox" 
            checked={inStockOnly} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }