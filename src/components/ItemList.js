// components/ItemList.js
import React from 'react';

const ItemList = ({ items, onDeleteItem }) => {
	return (
		<div className="item-list">
			<h2>Item List</h2>
			{items.map((item, index) => (
				<div className="item" key={index}>
					<div>{item.item}</div>
					<div>
						Quantity:
						{item.quantity}
					</div>
					<div>Price: ${item.price}</div>
					<button onClick={
						() =>
							onDeleteItem(index)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default ItemList;
