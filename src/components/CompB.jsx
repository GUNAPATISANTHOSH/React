let CompB=(x)=>{
    return (
        <div>
            <h2>Component B</h2>
            <pre>{JSON.stringify(x)}</pre>
            <h3>Employee Id:{x.eid}</h3>
            <h3>Location:{x.loc}</h3>
        </div>
    )
}
export default CompB;