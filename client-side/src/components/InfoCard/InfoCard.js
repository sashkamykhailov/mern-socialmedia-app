import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import * as UserApi from "../../api/UserRequests"
import ChangePersonalInfo from "../MODALS/ChangePersonalInfo/ChangePersonalInfo";
import {logout} from '../../redux/actions/AuthAction'
import "./InfoCard.scss";
import {BsPencil} from 'react-icons/bs'

const InfoCard = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch()
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleLogOut = ()=> {
    dispatch(logout())
  }

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser)
      }
    };
    fetchProfileUser();
  }, [user]);

  

  return (
    <div className="info">
      <div className="info__correction">
        <div className="info__title">Profile info:</div>
        {user._id === profileUserId ?( <div className="info__change" onClick={() => setModalOpen(true)}>
          Change information <BsPencil/>
        </div>) : null}
        <ChangePersonalInfo modalOpen={modalOpen} setModalOpen={setModalOpen} data={user} />
      </div>
      <div className="info__status info__about">Status: <span className='info__bold'>{profileUser.relationship ? profileUser.relationship: 'No information'}</span></div>
      <div className="info__lives info__about">Lives: <span className='info__bold'>{profileUser.livesin  ? profileUser.livesin: 'No information'}</span></div>
      <div className="info__works info__about">Works: <span className='info__bold'>{profileUser.worksAt  ? profileUser.worksAt: 'No information'}</span></div>
      <div className="info__logout">
        <button className="info__logout-btn" onClick={handleLogOut}>Logout</button>
      </div>
    </div>
  );
};

export default InfoCard;
