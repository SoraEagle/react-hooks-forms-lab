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

  const itemsToDisplay = items.filter((item) => {
    if(selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return(
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} /> {/* Add the onItemFormSubmit function */}
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;