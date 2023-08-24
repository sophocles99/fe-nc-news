import { Link } from "react-router-dom";
import { FaBars, FaChevronCircleLeft, FaUser } from "react-icons/fa";

const Nav = ({ page }) => {
  return (
    <nav>
      <Link to={page === "home" ? "" : "/"}>
        {page === "home" ? (
          <FaBars className="icon" />
        ) : (
          <FaChevronCircleLeft className="icon" />
        )}
      </Link>
      <Link className="title" to="/">
        <span className="company-name">NC</span>News
      </Link>
      <FaUser className="icon" />
    </nav>
  );
};

export default Nav;
