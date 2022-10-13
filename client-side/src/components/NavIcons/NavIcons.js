import { Link } from "react-router-dom";
import "./NavIcons.scss";

const NavIcons = () => {
  return (
    <div className="navicon">
      <nav className="navicon__nav">
        <Link className="navicon__linkR" to='/home'>
          <div>Home</div>
        </Link>
        <Link className="navicon__linkR" to='/chat'>
          <div>Chat</div>
        </Link>
      </nav>
    </div>
  );
};
export default NavIcons;
