import { useState } from "react"

let Message=()=>{
    let[msg,setMsg]=useState("Hello")   
    let gmHandler=()=>{
        setMsg("GOOD MORNING")
    }
    let[msg1,setMsg1]=useState("Hi") 
    let gaHandler=()=>{
        setMsg1("GOOD AFTERNOON")
    }
    let[msg2,setMsg2]=useState("Hello")
    let geHandler=()=>{
        setMsg2("GOOD EVENING")
    }
    let[msg3,setMsg3]=useState("Hello")
    let gnHandler=()=>{
        setMsg3("GOOD NIGHT")
    }
    return <div>
        <h1>Message Component</h1>
        <hr />
        <h2>message value:{msg}</h2>    
        <h2>message value:{msg1}</h2>    
        <h2>message value:{msg2}</h2>    
        <h2>message value:{msg3}</h2>    
        <hr />
        <button onClick={gmHandler}>GM</button>
        <button onClick={gaHandler}>GA</button>
        <button onClick={geHandler}>GE</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message;