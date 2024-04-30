// Importing React library for component creation
import React from 'react';

// Functional component definition
const ItemList = ({ items, onDeleteItem }) => {
  return (
    <div className="item-list"> 
      {/* Wrapper for the entire item list */}
      <h2>Item List</h2> 
      {/* Heading for the item list */}
      
      {items.map((item, index) => (
        // Iterate over the items array to create individual item components
        <div className="item" key={index}> 
          {/* Container for each item with a unique key */}
          
          <div>{item.item}</div> 
          {/* Display the item name */}
          
          <div>
            Quantity: 
            {item.quantity} 
            {/* Display the quantity of the item */}
          </div>
          
          <div>Price: ${item.price}</div> 
          {/* Display the price of the item */}
          
          <button 
            onClick={() => onDeleteItem(index)}>
            {/* Button to delete the item, using the index to identify which item to delete */}
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default ItemList;
