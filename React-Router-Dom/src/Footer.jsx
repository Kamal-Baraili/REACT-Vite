import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <h3 style={{ color: "white" }}>Copyright&copy;</h3>
        <div className="footer_links">
          <a href="https://www.fb.com" className="link" target="blank">
            Facebook
          </a>
          <a href="https://www.instagram.com" className="link" target="blank">
            Instagram
          </a>
          <a href="https://www.twitter.com" className="link" target="blank">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};
