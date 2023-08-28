import { Link } from "react-router-dom";
import { FaBars, FaChevronCircleLeft, FaUser } from "react-icons/fa";
import { useState } from "react";

const Nav = ({ page, sortBy, setSortBy, order, setOrder }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topLeftIcon = page === "home" ? (
    <FaBars className="icon" />
  ) : (
    <FaChevronCircleLeft className="icon" />
  )

  return (
    <nav>
      <Link to={page === "home" ? "" : "/"}>
        {topLeftIcon}
      </Link>
      <Link className="title" to="/">
        <span className="company-name">NC</span>News
      </Link>
      <FaUser className="icon" />
      {isMenuOpen && <form className="settings-menu">
        <p className="menu-heading">Sort By</p>
        <p className="menu-option">
        <label>
            <input
              type="radio"
              name="sort-by"
              value="option1"
              checked={true}
              className="form-check-input"
            />
            Option 1
          </label>
        </p>
        </form>}
    </nav>
  );
};

export default Nav;
