import { Link } from "react-router-dom";
import {
  FaBars,
  FaWindowClose,
  FaChevronCircleLeft,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import SettingsMenu from "./SettingsMenu";

const Nav = ({ page, sortBy, setSortBy, order, setOrder }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topLeftIcon =
    page === "home" ? (
      isMenuOpen ? (
        <FaWindowClose className="icon" />
      ) : (
        <FaBars className="icon" />
      )
    ) : (
      <FaChevronCircleLeft className="icon" />
    );

  return (
    <nav>
      <Link
        to={page === "home" ? "" : "/"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {topLeftIcon}
      </Link>
      <Link className="title" to="/">
        <span className="company-name">NC</span>News
      </Link>
      <FaUser className="icon" />
      <SettingsMenu
        isMenuOpen={isMenuOpen}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </nav>
  );
};

export default Nav;
