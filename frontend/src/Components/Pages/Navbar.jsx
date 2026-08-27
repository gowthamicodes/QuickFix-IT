import { Link } from "react-router-dom";
import { useContext, useState } from "react";
// import { AuthContext } from "../Context/Auth-context";
import { AuthContext } from "../../Context/Auth-context";
import "./Navbar.css";

function Navbar() {
  const { currentUser, isLoggedIn, logout } =
    useContext(AuthContext);

const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
  setMenuOpen(false);
}

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <span className="logo-icon">Q</span>

          <span className="logo-name">
            QuickFix <span>IT</span>
          </span>
        </Link>
      </div>

{/* {Hamburger Button -Mobileonly} */}
<button className="hamburger-btn"
onClick={() => setMenuOpen(!menuOpen)}
aria-label="Toggle navigationmenu"
aria-expanded={menuOpen}
>
  {menuOpen ? "✕" : "☰"}
</button>

      {/* Navigation */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`} > 

        <Link to="/" onClick={closeMenu}>Home</Link>

        <Link to="/about" onClick={closeMenu}>
          About Us
        </Link>

        <Link to="/overview" onClick={closeMenu}>
          Overview
        </Link>

        {/* <Link to="/resources">
          Resources
        </Link> */}

      </div>


      {/* Login / Logout */}
      <div className={`auth-section ${menuOpen ? "active" : ""}`}>

        {isLoggedIn ? (
          <>
            <button className="username-btn">
              {currentUser?.name}
                      {/* {currentUser ? currentUser.name : "User"} */}

            </button>

            <button
              className={`logout-btn ${menuOpen ? "active" : ""}`}
              onClick={() => {
                logout()
                closeMenu()
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login"
          onClick={closeMenu}
          >
            <button className={`login-btn ${menuOpen ? "active" : ""}`}>
              Login
            </button>
          </Link>
        )}

      </div>

    </nav>

    
  );
}

export default Navbar;