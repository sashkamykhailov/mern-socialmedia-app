
import "./ProfileCard.scss";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

const ProfileCard = () => {

  const {user} = useSelector(state => state.authReducer.authData);
  const posts = useSelector(state => state.postReducer.posts)
  const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="profile">
      <div className="profile__image">
        <img className="profile__img" alt='prfl' src={user.profilePicture ? serverPublicFolder + user.profilePicture : serverPublicFolder + "defaultProfile.png"}/>
      </div>
      <div className="profile__name">{user.firstname} {user.lastname}</div>
      <div className="profile__image">
        {user.worksAt ? user.worksAt : "Write about yourself"}
      </div>
      <div className="profile__followers-info">
        <div className="profile__followers">Followers: {user.followers.length}</div>
        <div className="profile__following">Following: {user.following.length}</div>
        <div className="profile__posts">Number of posts: {posts.filter(post => post.userId === user._id).length}</div>
      </div>
      <div className="profile__followers-info">
        <Link to={'/profile/' + user._id}><button>My Profile</button></Link>
      </div>
    </div>
  );
};
export default ProfileCard;
