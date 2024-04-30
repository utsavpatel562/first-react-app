// components/TotalAmount.js
import React from 'react'; 
// Import the React library for creating components

// Functional component definition for TotalAmount
const TotalAmount = ({ total }) => {
  return (
    <div className="total"> 
      {/* Wrapper for the total amount display */}
      
      <h3> 
        {/* Heading element to display the total amount */}
        Total Amount: ${total.toFixed(2)} 
        {/* Display the total, formatted to 2 decimal places */}
      </h3>
    </div>
  );
};

// Export the TotalAmount component for use in other parts of the application
export default TotalAmount;
