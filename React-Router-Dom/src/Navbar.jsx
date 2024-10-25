import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <h1 style={{ color: "white" }}>Logo</h1>
        <div className="navmenus">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/menu" className="link">
            Menu
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
