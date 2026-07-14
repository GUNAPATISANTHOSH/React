let Employees=(x)=>{
    let {employees}=x
    return <div>
            <h2>React components</h2>
            <pre>{JSON.stringify(x)}</pre>
            <pre>{JSON.stringify(employees)}</pre>
            <table border="2">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>City</th>
                </thead>
                <tbody>
                    {
                        employees.map((emp)=>{
                            return <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.age}</td>
                                <td>{emp.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
           </div>
           
}
export default Employees;
