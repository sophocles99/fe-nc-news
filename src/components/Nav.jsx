import { Link } from "react-router-dom";
import { FaBars, FaChevronCircleLeft, FaUser } from "react-icons/fa";

const Nav = ({ page }) => {
  return (
    <nav>
      <Link to={page === "home" ? "" : "/"} style={{ verticalAlign: "middle" }}>
        {page === "home" ? (
          <FaBars className="icon" />
        ) : (
          <FaChevronCircleLeft className="icon" />
        )}
      </Link>
      <p className="title">
        <span className="company-name">NC</span>News
      </p>
      <FaUser className="icon" />
    </nav>
  );
};

export default Nav;
