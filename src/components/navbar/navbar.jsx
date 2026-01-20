import "./navbar.css";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <nav>
        <div className="logo-and-links">
          <h1>LOGO</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <a>About</a>
            <a>Contact</a>
            <a>Product</a>
          </div>
        </div>
        <button>
          <Link
            onClick={() => {
              localStorage.setItem("currentUser", "");
            }}
            to="/login"
          >
            LOGOUT
          </Link>
        </button>
      </nav>
    </>
  );
}

export default navbar;
