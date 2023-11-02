import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark  border-bottom shadow-sm backgroundDark">
        <div className="container" style={{ color: "black" }}>
          <a className="navbar-brand" href="/">
            <img
              height="20"
              src="https://uploads-ssl.webflow.com/63e610c62d73bd54e8ee8455/63e610c62d73bd46ffee8583_Liquality_logo.svg"
              alt="nav"
            />{" "}
          </a>
          <div className="navbar-collapse collapse show" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link large
"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link large
"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <div></div>
              <div> </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
