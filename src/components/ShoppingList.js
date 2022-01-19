import React, {useState} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({items, setItems}){
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
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
    const itemName = item.name.toLowerCase(); //Creates lowercase version of item.name.
    const searchTerm = search.toLowerCase(); //Creates lowercase version of search.
    return itemName.includes(searchTerm); //Returns items from itemsToDisplay that match with search(searchTerm).
  });

  function onItemFormSubmit(newItem){ //Adds the newItem object to the list, after invoking addItem()    
    const itemArray = [...items, newItem];
    setItemList(itemArray);
  }

  return(
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} items={items} setItemList={setItemList} />
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