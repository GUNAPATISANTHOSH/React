import { useState } from "react"

let Message=()=>{
    let[msg,setMsg]=useState("Hello")   
    let gmHandler=()=>{
        setMsg("Hello GOOD MORNING")
    }
    let[msg1,setMsg1]=useState("Hi") 
    let gaHandler=()=>{
        setMsg1("Hi GOOD AFTERNOON")
    }
    return <div>
        <h1>Message Component</h1>
        <hr />
        <h2>message value:{msg}</h2>    
        <h2>message value:{msg1}</h2>    
        <hr />
        <button onClick={gmHandler}>GM</button>
        <center>
        <button onClick={gaHandler}>GA</button>
        </center>
    </div>
}
export default Message;