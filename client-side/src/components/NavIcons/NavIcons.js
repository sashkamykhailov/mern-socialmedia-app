import { Link } from "react-router-dom";
import "./NavIcons.scss";
import {AiOutlineHome, AiFillWechat} from 'react-icons/ai'


const NavIcons = () => {
  return (
    <div className="navicon">
      <nav className="navicon__nav">
        <Link className="navicon__linkR" to='/home'>
          <AiOutlineHome className="navicon__icon"/>
        </Link>
        <Link className="navicon__linkR" to='/chat'>
        <AiFillWechat className="navicon__icon"/>
        </Link>
      </nav>
    </div>
  );
};
export default NavIcons;
