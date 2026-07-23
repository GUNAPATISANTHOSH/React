import { useState } from "react";

let Register =()=>{
    let[user,setUser]=useState({'username':'','mobile':'','date':'','gender':'','state':'','textbox':''})
    let usernameHandler=(event)=>{
        setUser({...user,username:event.target.value})
    }
    let registerHandler=()=>{
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
                Mobile No:<input type="Mobile "/> <br /><br />
                DOB:::::::<input type="date"/><br /><br />
                Gender :::<input type="radio" name="gender" id="Male"/>male
                <input type="radio" name="gender" id="female"/>Female<br/> <br />
                State:::::<select type="state" id="please select state" name="select">
                    <option value="" selected disabled>---Select State---</option>
                    <option value="">Andhra Pradesh</option>
                    <option value="">Telangana</option>
                    <option value="">Tamil Nadu</option>
                    <option value="">Kerala</option>
                </select>
                <br/><br />
                Message:::<input type="textbox"/><br/><br />
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
