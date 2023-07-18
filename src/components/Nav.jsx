import { Link } from "react-router-dom";
import User from "./User";

const Nav = () => {
  return (
    <nav>
      <h1 className="header">NC News</h1>
      <ul className="links-container">
        <Link to="/"><li className="link">Home</li></Link>
        <li className="link">Another link?</li>
      </ul>
      <User className="user" />
    </nav>
  );
};

export default Nav;
