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
        <button className="btn btn-danger" onClick={dec}>-</button>
        <span className="mx-3 fs-3">{Counter}</span> 
        {/* {Counter} */}
        <button className="btn btn-primary" onClick={inc}>+</button>
    </div>
}
export default Counter;

