import React, {useState} from "react";

function Filter({onCategoryChange, onSearchChange, search}){ //Takes onCategoryChange, onSearchChange, and search from ShoppingList
  return(
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search} /> {/* Connected state to input field */}
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

// To Do:
// Use state value to determine which items are being displayed...
// Update the <select> element to be a controlled input (optional)