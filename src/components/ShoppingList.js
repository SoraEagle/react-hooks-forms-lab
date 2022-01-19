import React, {useState} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({items}){
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState(""); //Added state for Filter.
  const [itemList, setItemList] = useState(items);

  function handleCategoryChange(event){
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value);
  }

  const itemsToDisplay = itemList.filter((item) => {
    if(selectedCategory === "All") { //The selectedCategory is compared FIRST.
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
      items={items}
      setItemList={setItemList} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => ( //Map not JUST the original items, but also those added!
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;