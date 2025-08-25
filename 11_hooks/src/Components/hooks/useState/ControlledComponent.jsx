import React, { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>Controlled Component</h3>
      <input style={{border:"2px solid black"}}
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
      <p>Typed: {name}</p>
    </div>
  );
}
