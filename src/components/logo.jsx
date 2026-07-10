let logo = "React App";
let home = "Home";
let about = "About";

let Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a href="/" className="navbar-brand">
          {logo}
        </a>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              {home}
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              {about}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;