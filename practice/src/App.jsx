import Navbar from './Ui/Navbar';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Login from './Components/Login';
let App=()=>{
  return <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
    </Router>
  </div>
}
export default App;