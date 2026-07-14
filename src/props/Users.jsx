import Employees from "./Employees";
let Users=()=>{
    const users = [
        { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, city: "New York" },
        { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 34, city: "Los Angeles" },
        { id: 3, name: "Carla Gomez", email: "carla.gomez@example.com", age: 25, city: "Chicago" },
        { id: 4, name: "David Lee", email: "david.lee@example.com", age: 41, city: "Houston" },
        { id: 5, name: "Eve Martin", email: "eve.martin@example.com", age: 30, city: "Phoenix" },
        { id: 6, name: "Frank Wilson", email: "frank.wilson@example.com", age: 37, city: "Philadelphia" },
        { id: 7, name: "Grace Kim", email: "grace.kim@example.com", age: 22, city: "San Antonio" },
        { id: 8, name: "Henry Brown", email: "henry.brown@example.com", age: 45, city: "San Diego" },
        { id: 9, name: "Isla Patel", email: "isla.patel@example.com", age: 29, city: "Dallas" },
        { id: 10, name: "Jack Turner", email: "jack.turner@example.com", age: 33, city: "San Jose" }
    ];

    return <div>
            <h2>User Component</h2>
            <hr/>
            <Employees employees={users} />
            </div>
}
export default Users;