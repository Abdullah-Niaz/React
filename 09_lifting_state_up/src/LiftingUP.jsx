import React from 'react'
import { useState } from 'react'

function NumberInput({number,onNumberChange}){
    return (
        <div>
            <h3>Enter the Number: </h3>
            <input type="number" 
            value={number}
            onChange={(e)=>onNumberChange(Number(e.target.value))}/>
        </div>
    )
};

function DisplayNumber({number}){
    return (
        <div>
            <h3>Double of Your Number</h3>
            <p>{number * 2}</p>
        </div>
    )
}



export default function LiftingUP() {
  const [number, setNumber] = useState();

    return (
        <div>
            <h3>Lifting the State Up</h3>
            <NumberInput number={number} onNumberChange={setNumber}/>
            <DisplayNumber number={number}/>

        </div>
  )
}
