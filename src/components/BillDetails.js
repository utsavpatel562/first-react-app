// components/BillDetails.js
import React, { useState } from 'react'; 
// Import React and useState hook for state management

// Functional component definition for BillDetails
const BillDetails = ({ onAddItem, onDeleteItem }) => {
  // State for form fields and error messages
  const [item, setItem] = useState(''); // State for item name
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [price, setPrice] = useState(0); // State for price
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (!item.trim()) {
      // Validate if item name is not empty or just whitespace
      setErrorMessage(`Please input data in the Item section.`);
      return;
    }

    if (!/^[a-zA-Z]+$/.test(item)) {
      // Validate if item name contains only alphabetical characters
      setErrorMessage(`Item should only contain 
        alphabetical characters.`);
      return;
    }

    const newItem = { item, quantity, price }; 
    // Create a new item object with the current state values
    onAddItem(newItem); // Call the onAddItem callback with the new item

    // Reset the form fields after adding the item
    setItem(''); 
    setQuantity(1); 
    setPrice(0); 
    setErrorMessage(''); 
  };

  return (
    <div> 
      {/* Container for the BillDetails component */}
      
      {/* Input field for item name */}
      <label>Item:</label>
      <input 
        type="text" 
        placeholder="Item name" 
        required 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
      />

      {/* Input field for quantity */}
      <label>Quantity:</label>
      <input 
        type="number" 
        required 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
      />

      {/* Input field for price */}
      <label>Price:</label>
      <input 
        type="number" 
        required 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />

      {/* Button to add the item to the list */}
      <button onClick={handleAddItem}>Add Item</button>

      {/* Display error message if there's an issue with the input */}
      <p style={{ color: 'red' }}>{errorMessage}</p> 
    </div>
  );
};

// Export the BillDetails component for use in other parts of the application
export default BillDetails;
