import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/UserAction";
import './SingleFollowerCard.scss'

const SingleFollowerCard = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.profilePicture
            ? 
            publicFolder + person.profilePicture 
            : 
            publicFolder + "defaultProfile.png"
          } 
          alt="profile"
          className="follower__image"
        />
        <div className="follower__followername">
          <div>{person.firstname}</div>
          <div>@{person.username}</div>
        </div>
      </div>
      <button
        className="follower__unfollowButton"
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default SingleFollowerCard;









