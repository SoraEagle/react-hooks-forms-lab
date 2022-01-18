import React, {useState} from "react";

function Filter(props){
  return(
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={props.onSearchChange} value={props.search} /> {/* Connected state to input field */}
      <select name="filter" onChange={props.onCategoryChange}>
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