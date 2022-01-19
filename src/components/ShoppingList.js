import React, {useState} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import {v4 as uuid} from "uuid";

function ShoppingList({items}){
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState(""); //Added state for Filter.
  const [itemList, setItemList] = useState(items);
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleCategoryChange(event){
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value);
  }

  function handleItemName(event){ //Handles newItem.itemName.
    setItemName(event.target.value);
  }
  function handleItemCategory(event){ //Handles newItem.itemCategory.
    setItemCategory(event.target.value);
  }

  function handleItemFormSubmit(event){ //Not getting invoked? CURRENT Problem Area!!!
    event.preventDefault();
    
    const newItem = { //Object for creating new items.
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    
    const itemArray = ([...items, newItem]);
    // console.log(newItem);
    // console.log(itemArray);
    setItemList(itemArray);
    setItemName("");
    setItemCategory("");
  }

  const itemsToDisplay = itemList.filter((item) => {
    if(selectedCategory === "All") { //The selectedCategory is compared FIRST.
      // setItemList(items);
      return true;
    }
    
    return item.category === selectedCategory;
  }).filter((item) => {
    if(search === "") return true; //search is compared AFTER selectedCategory.
    const itemName = item.name.toLowerCase();
    const searchTerm = search.toLowerCase();
    return itemName.includes(searchTerm);
  });

  return(
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={handleItemFormSubmit} onItemName={handleItemName} onItemCategory={handleItemCategory} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => ( //Map not JUST the original items, but also those added!
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;