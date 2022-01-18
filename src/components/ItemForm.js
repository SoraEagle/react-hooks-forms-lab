import React, {useState} from "react";
import {v4 as uuid} from "uuid"; //What is this for?

function ItemForm(props){
  // 
  return(
    <form className="NewItem" > {/*Add onItemFormSubmit*/}
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
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