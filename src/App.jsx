// import Navbar from './components/Navbar'
// // // // import Logo from './components/Logo'
// // // function App(){
// // //   return (<div>
// // //     <Navbar/>
// // //   </div>)
// // // }
// // // export default App;
// // import users from './props/users';
// // function App(){
// //   return (
// //     <div>
// //       <h1>PROPS</h1>
// //       <users/>
// //     </div>
// //   )
// // }
// // export default App;
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Users  from "./props/Users"
// let App=()=>{
//   return <div>
//     <Navbar/>
//     <h2>Props</h2>
//     <hr />
//     <Users/>
    
//   </div>
// }
// export default App;
// import Message  from "./State/Message";
// import Counter from "./State/Counter";
// import Messages from './State/Messages'
import Message from './EventBinding/Message';
import Table from './EventBinding/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

let App =()=>{
  return <div>
    <Table/>
  </div>
}
export default App;