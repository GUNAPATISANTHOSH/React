import { useState } from "react";

let Counter=()=>{
    let [Counter,setCounter]=useState(0)
    let inc=()=>{
        setCounter(Counter+1)
    }
    let reset=()=>{
        setCounter(Counter-Counter)
    }
    return <div className="container">
        <h2>Counter APP</h2>
        <br />
        <button className="btn btn-primary mb-3"onClick={inc}>+</button>
        <h3>count:{Counter}</h3>
        <button className="btn btn-primary me-2" onClick={reset}>Reset</button>
    </div>
}
export default Counter;