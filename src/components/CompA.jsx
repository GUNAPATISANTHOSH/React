import CompB from "./CompB";
let CompA=()=>{
        let eid=101;
        let ename="Rahul";
        let loc=['wayand','new delhi'];
        return <div>
            <h1>CompA</h1>
            <h2>emp id:{eid}</h2>
            <h2>ename:{ename}</h2>
        <hr />
        <CompB eid={eid} ename={ename}/>
        </div>
}
export default CompA;
// import CompB from "./CompB";

// let CompA=()=>{
//         let eid=101;
//         let ename="Rahul";
//         let loc=['Wayanad','New Delhi'];
//         return <div>
//                 <h1>CompA</h1>
//                 <h2>Emp Id:{eid}</h2>
//                 <h3>Emp Name:{ename}</h3>
//                 <h3>Total :{10+20}</h3>
//             <hr />
//             <CompB eid={eid} ename={ename} loc={loc}/>
//             </div>
// }
// export default CompA;
