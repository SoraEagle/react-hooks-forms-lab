import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function ItemForm({items, setItemList}){
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function onItemName(event){ //Handles newItem.itemName.
    setItemName(event.target.value);
  }
  function onItemCategory(event){ //Handles newItem.itemCategory.
    setItemCategory(event.target.value);
  }

  function onItemFormSubmit(event){ //CURRENT Problem Area!!!
    event.preventDefault();
    
    const newItem = { //Object for creating new items.
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    
    const itemArray = ([...items, newItem]);
    console.log(newItem);
    // console.log(itemArray);
    setItemList(itemArray);
    setItemName("");
    setItemCategory("");
  }

  return(
    <form className="NewItem" onSubmit={onItemFormSubmit} > {/* MUST invoke onItemFormSubmit */}
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