// Importing required libraries and components
import React from 'react';  // React library for component-based UI
import BillDetails from './components/BillDetails';  // Component for entering bill details
import ItemList from './components/ItemList';  // Component for listing items
import TotalAmount from './components/TotalAmount';  // Component for displaying the total amount
import "bootstrap/dist/css/bootstrap.css";  // Import Bootstrap for styling
import { jsPDF } from 'jspdf';  // Library for generating PDFs
import './App.css';  // Custom CSS styles

// Main App component
function App() {
	// State variable to hold the list of items in the invoice
	const [items, setItems] = React.useState([]);

	// Function to add an item to the list
	const handleAddItem = (item) => {
		setItems([...items, item]);  // Create a new array with the added item
	};

	// Function to delete an item from the list
	const handleDeleteItem = (index) => {
		const updatedItems = [...items];  // Copy the current items list
		updatedItems.splice(index, 1);  // Remove the item at the specified index
		setItems(updatedItems);  // Update the state with the modified list
	};

	// Function to calculate the total amount of the invoice
	const calculateTotalAmount = () => {
		return items.reduce(
			(total, item) =>
				total + item.quantity * item.price,  // Calculate the total cost for each item
			0  // Start the total at 0
		);
	};

	// Function to download the invoice as a PDF
	const handleDownloadPDF = () => {
		const pdf = new jsPDF();  // Create a new PDF instance
		pdf.text('Invoice', 20, 20);  // Add the title to the PDF

		// Add each item to the PDF
		items.forEach((item, index) => {
			const yPos = 30 + index * 10;  // Calculate the Y-position for each item
			pdf.text(
				`Item: ${item.item}, Quantity: ${item.quantity}, Price: ${item.price}`,  // Text content
				20,  // X-position
				yPos  // Y-position
			);
		});

		// Add the total amount to the PDF
		const totalAmount = calculateTotalAmount();  // Get the total amount
		pdf.text(
			`Total Amount: $${totalAmount.toFixed(2)}`,  // Display the total with 2 decimal places
			20,  // X-position
			180  // Y-position
		);

		// Save the PDF file with the name 'invoice.pdf'
		pdf.save('invoice.pdf');
	};

	// Render the App component
	return (
		<div className="App">
			<center><h1>Invoice Generator</h1></center>  // Title of the application
			<BillDetails onAddItem={handleAddItem} />  // Component to add items to the list
			<ItemList items={items} onDeleteItem={handleDeleteItem} />  // Component to display and delete items
			<TotalAmount total={calculateTotalAmount()} />  // Component to display the total amount
			<button onClick={handleDownloadPDF}>Download PDF</button>  // Button to download the PDF
		</div>
	);
}

// Export the App component as the default export
export default App;
