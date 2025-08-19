import { useState } from "react";

export default function Derived() {
  const [items, setItems] = useState([
    { name: "Apple", price: 100, quantity: 2 },
    { name: "Orange", price: 50, quantity: 3 },
  ]);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} × {item.price}
          </li>
        ))}
      </ul>
      <h3>Total: {totalPrice}</h3>
    </div>
  );
}
