import React, { useEffect, useState } from "react";
import Axios from "axios";

let Effect = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((resp) => {
                setUsers(resp.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <React.Fragment>
            <h3>User Component</h3>

            <table border="3">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Effect;