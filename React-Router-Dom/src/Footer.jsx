import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <h3 style={{ color: "white" }}>Copyright&copy;</h3>
        <div className="footer_links">
          <a href="#" className="link">
            Facebook
          </a>
          <a href="#" className="link">
            Instagram
          </a>
          <a href="#" className="link">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};
