import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import "./NavIcons.scss";
import {AiOutlineHome, AiFillWechat, AiOutlineUser} from 'react-icons/ai'
import {RiLogoutBoxRLine} from 'react-icons/ri'
import {logout} from '../../redux/actions/AuthAction'



const NavIcons = () => {

  const handleLogOut = ()=> {
    dispatch(logout())
  }

  const dispatch = useDispatch()

  const {user} = useSelector(state => state.authReducer.authData);

  return (
    <div className="navicon">
      <nav className="navicon__nav">
        <Link className="navicon__linkR" to='/home'>
          <AiOutlineHome className="navicon__icon"/>
        </Link>
        <Link className="navicon__linkR" to='/chat'>
          <AiFillWechat className="navicon__icon"/>
        </Link>
        <Link className="navicon__linkR" to={'/profile/' + user._id}>
          <AiOutlineUser className="navicon__icon"/>
        </Link>
        <button className="logout-btn" onClick={handleLogOut}><RiLogoutBoxRLine className="navicon__icon"/></button>
      </nav>
    </div>
  );
};
export default NavIcons;
