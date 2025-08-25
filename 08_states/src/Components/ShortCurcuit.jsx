import React, { useState } from 'react'

export default function ShortCurcuit() {

    const [isLoggedIn, setIsloggedIn] = useState(true)
    const [user, setUser]  = useState("");
        return (
    <section className="container short-container">
        <h1>Welcom to the shortCircuit Evaluation!</h1>

        { isLoggedIn && <p>You are logged in!</p>}
        {user ? `Hello ${user}` : "PLease Login! "}

        
        <div className='grid-three-cols'>
            <button onClick={()=> setIsloggedIn(!isLoggedIn)}>Toggle Login State</button>
            <button onClick={()=> setUser("Ali")}>Set User</button>
            <button onClick={()=> setUser("")}>Clear User</button>
        </div>
    </section>
  )
}
