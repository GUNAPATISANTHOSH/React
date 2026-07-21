import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Ui/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home'
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
let App=()=>{
  return <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      
    </Routes>
    </Router>
  </div>
}
export default App;