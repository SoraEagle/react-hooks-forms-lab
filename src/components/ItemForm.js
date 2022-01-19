import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function ItemForm({items, setItemList, onItemFormSubmit}){
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const newItem = { //Object for creating new items.
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };

  function onItemName(event){
    setItemName(event.target.value);
  }
  function onItemCategory(event){
    setItemCategory(event.target.value);
  }

  function addItem(event){
    event.preventDefault();
    onItemFormSubmit(newItem);
    setItemName("");
    setItemCategory("");
  }

  return(
    <form className="NewItem" onSubmit={addItem} > {/* MUST invoke onItemFormSubmit, which invokes addItem */}
      <label>
        Name:
        <input type="text" name="name" onChange={onItemName} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onItemCategory} value={itemCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;