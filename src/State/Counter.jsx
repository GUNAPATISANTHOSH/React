import { useState } from "react";

let Counter=()=>{
    let [Counter,setCounter]=useState(1)
    let dec=()=>{
        setCounter(Counter-1)
    }
    let inc=()=>{
        setCounter(Counter+1)
    }
    return <div className="container">
        <br />
        <h1>Counter Component</h1>
        <br />
        <button onClick={dec}>-</button>
        {Counter}
        <button onClick={inc}>+</button>
    </div>
}
export default Counter;

