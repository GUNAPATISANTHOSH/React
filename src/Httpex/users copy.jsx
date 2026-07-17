import axios from "axios";
import { useState } from "react";
let Users=()=>{
    let[users,setUsers]=useState([])
    let usersHandler=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch()
    }
    return <div>
        <pre>{JSON.stringify(users)}</pre>
        <h3>User Component</h3>
        <button onClick={usersHandler}>GET USERS</button>
    </div>
}
export default Users;