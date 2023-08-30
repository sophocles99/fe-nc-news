import { Link } from "react-router-dom";
import { useState } from "react";
import Overlay from "./Overlay";
import SettingsMenu from "./SettingsMenu";
import {
  FaBars,
  FaWindowClose,
  FaChevronCircleLeft,
  FaUser,
} from "react-icons/fa";

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
      <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <SettingsMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
    </nav>
  );
};

export default Nav;
