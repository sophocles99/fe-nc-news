import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import User from "./User";

const Nav = ({ backArrow }) => {
  return (
    <nav>
      <Link
        to="/"
        className="back-arrow"
        style={backArrow ? null : { display: "hidden" }}
      >
        {FaChevronLeft()}
      </Link>
      <User className="user" />
    </nav>
  );
};

export default Nav;
