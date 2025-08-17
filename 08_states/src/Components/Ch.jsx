import React from "react";
import { useState } from "react";
// const users = [
//   { name: "Abdullah", age: 22 },
//   { name: "Hamza", age: 25 },
//   { name: "Ayesha", age: 20 },
// ];


export default function Ch() {
    const [users, setUsers] = useState([
    { name: "Abdullah", age: 22 },
    { name: "Hamza", age: 25 },
    { name: "Ayesha", age: 20 }
  ]);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <b>Name:</b> {user.name}, <b>Age:</b> {user.age}
          </li>
        ))}
      </ul>
    </div>
    )
}
