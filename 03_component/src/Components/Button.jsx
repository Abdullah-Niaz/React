import React from 'react'
import styles from './Button.module.css';
export default function() {

    const helloButton = ()=>{
        alert("Hello, You Clicked Button")
    }
  return (
    <div>
        <button className={styles.button} onClick={helloButton}>Click Me</button>
    </div>
  )
}
