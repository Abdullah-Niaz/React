import React from "react";

export default function Greeting({ isLoggedIn }) {
  return (
    <div>
        <h3>Wellcome</h3>
      <p>{isLoggedIn && "You're logged in"}</p>
    </div>
  );
}
