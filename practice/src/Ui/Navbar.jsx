import {Link} from 'react-router-dom'
let Navbar=()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/index" className="navbar-brand  ">Logo</Link>
        <div className="ml-auto">
        <ul className='navbar-nav' >
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
        </ul>
        </div>
    </nav>
}   
export default Navbar;