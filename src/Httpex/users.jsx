import { useEffect, useState } from "react"
import axios from "axios";
let Users=()=>{
    let[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            setUsers(resp.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    return ( 
        <div>
            <h3>User Component</h3>
            <table border={2}>
                <thead>
                    <tr>
                        <th>id </th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users)=>(
                        <tr>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Users;   