import { useState } from "react";

let Register =()=>{
    let[user,setUser]=useState({'username':'','mobile':'','date':'','gender':'','state':'','textbox':''})
    let usernameHandler=(event)=>{
        setUser({...user,username:event.target.value})
    }
    let mobileHandler=(event)=>{
        setUser({...user,mobile:event.target.value})
    }
    let dateHandler=(event)=>{
        setUser({...user,date:event.target.value})
    }
    let genderHandler=()=>{
        setUser({...user,gender:event.target.value})
    }
    let stateHandler = (event) => {
    console.log(event.target.value);

    setUser({...user,state: event.target.value});
    };
    let messageHandler=()=>{
        setUser({...user,textbox:event.target.value})
    }
    let registerHandler=()=>{
        event.preventDefault()
        alert("login successful")
    }
    return <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="border border-dark rounded p-4 shadow">
                <h2 class="text-center mb-4">Registration Details</h2>
            <form onSubmit={registerHandler}>
                <pre>{JSON.stringify(user)}</pre>
                User Name:<input type="username" onChange={usernameHandler} /> <br /><br />
                Mobile No:<input type="Mobile " onChange={mobileHandler}/> <br /><br />
                DOB:::::::<input type="date" onChange={dateHandler}/><br /><br />
                Gender :::<input type="radio" name="gender" id="Male" value="Male" onChange={genderHandler}/>male
                <input type="radio" name="gender" id="female" value="Female" onChange={genderHandler}/>Female<br/> <br />
                State:::::<select name="state" value={user.state} onChange={stateHandler}>
                <option value="" disabled> ---Select State---</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                </select>
                <br/><br />
                Message:::<input type="textbox" onChange={messageHandler}/><br/><br />
                <input type="checkbox" />Please Accept  t&c <br/><br />
                <input type="submit" value="Registration"/> 
                   
                <input type="submit" value="Cancel"/>
            </form>
            </div>
        </div>
    </div>
</div>
}
export default Register;
