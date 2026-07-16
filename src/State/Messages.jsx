import { useState } from "react";

let Messages=()=>{
    let [msg,setMsg]=useState("hello")
    let gmHandler=()=>{
        setMsg("GOOD MORNING")
    }
    let gaHandler=()=>{
        setMsg("GOOD AFTERNOON")
    }
    let geHandler=()=>{
        setMsg("GOOD EVENING")
    }
    let gnHandler=()=>{
        setMsg("GOOD NIGHT")
    }

    return <div>
        <h2>Messages </h2>
        <h2>msg:{msg}</h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gaHandler}>GA</button>
        <button onClick={geHandler}>GE</button>
        <button onClick={gnHandler}>GE</button>
    </div>
}
export default Messages;