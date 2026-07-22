import { useState } from "react"

let Login=()=>{
    let [user,setUser]=useState({'email':'','password':''})
    let emailHandler=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        setUser({...user,email:event.target.value})
    }
    let pwdHandler=()=>{
        setUser({...user,password:event.target.value})
    }
    let submitHandler=()=>{
        event.preventDefault();
        alert ("Login Successful")
    }
    return <div>
        <pre>{JSON.stringify(user)}</pre>
        <form action="">
            Email:<input type="email" onChange={emailHandler}></input><br /><br />
            Password:<input type="password" onChange={pwdHandler}></input><br /><br />
            <input type="submit" value="Login" onClick={submitHandler}/>
        </form>
    </div>
}
export default Login;