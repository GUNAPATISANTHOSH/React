import { useState } from "react"

let Login=()=>{
    let [user,setUser]=useState({'email':'','pwd':''})
    let emailHandler=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        setUser({...user,email:event.target.value})
    }
    let pwdHandler=(event)=>{
        setUser({...user,password:event.target.value})

    }
    let submitHandler=(event)=>{
        event.preventDefault()
        alert("Login Successful")
    }
    return <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="" className="navbar-brand">Logo</a>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-link ">Home</li>
                    <li className="nav-link">About</li>
                    <li className="nav-link">Contact</li>
                    <li className="nav-link">Login</li>
                </ul>
            </div>
        </nav>
        <pre>{JSON.stringify(user)}</pre>
        <form action="" onSubmit={submitHandler}>
            Email:<input type="email" onChange={emailHandler}></input><br /><br />
            Password:<input type="password" onChange={pwdHandler}></input><br /><br />
            <input type="submit" value="Login" />
        </form>
    </div>
}
export default Login;