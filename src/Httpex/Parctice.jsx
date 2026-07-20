import { useEffect, useState } from "react";
import axios from "axios";
let Users=()=>{
    let [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            setUsers(resp.data);
        })
        .catch((error)=>{
            console.log(error);
        });

    },[]);
    
    return <div>
        <h3>FastAPI</h3>
        <table border={2}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Username</th>                     
                    <th>Zipcode</th>                     
                    <th>Phone</th>                     

                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id} >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.address.city}</td>
                        <td>{user.username}</td>
                        <td>{user.address.zipcode}</td> 
                        <td>{user.phone}</td> 
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}
export default Users;