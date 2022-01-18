import React, {useState} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({items}){
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState(""); //Added state for Filter.

  function handleCategoryChange(event){
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){ //
    setSearch(event.target.value);
  }

  function handleItemFormSubmit(event){
    event.preventDefault();
    // const newItem = {
    //   id: uuid(),
    //   name: itemName,
    //   category: itemCategory,
    // };
  }

  // MUST return search results off of partial matches!!!
  const itemsToDisplay = items.filter((item) => {
    if(selectedCategory === "All") return true; //The selectedCategory must is compared FIRST.

    return item.category === selectedCategory;
  }).filter((item) => {
    if(search === "") return true; //search is compared AFTER selectedCategory.
    return item.name === search;
  });

  return(
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} /> {/* Add the onItemFormSubmit function */}
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;