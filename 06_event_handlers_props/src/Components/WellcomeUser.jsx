import React from 'react'

export default  function WellcomeUser(props){
    const handleGreeting = () => {
        alert("Handle Greeting");
        props.onClick;
    }
    return (
        <>
        <button onClick={props.onClick}>Click Me</button>
        <button onMouseOver={props.onMouseOver}>Hover Me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}
