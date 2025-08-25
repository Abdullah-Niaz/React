import React, { useRef } from "react";

export default function UnControlledComponent() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Typed: ${inputRef.current.value}`);                                                                      
  };

  return (
    <div>
      <h3>Uncontrolled Component</h3>
      <input 
        type="text" 
        ref={inputRef} 
      />
      <button onClick={handleSubmit}>Show Value</button>
    </div>
  );
}
