
import "./ProfileCard.scss";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

const ProfileCard = () => {

  const {user} = useSelector(state => state.authReducer.authData);
  const posts = useSelector(state => state.postReducer.posts)
  const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="profilechild">
      <div className="profilechild__image">
        <img className="profilechild__img" alt='prfl' src={user.profilePicture ? serverPublicFolder + user.profilePicture : serverPublicFolder + "defaultProfile.png"}/>
      </div>
      <div className="profilechild__name">
        <div className="profilechild__firstname">{user.firstname}</div>
        <div className="profilechild__lastname">{user.lastname}</div>
      </div>
      <div className="profilechild__job">
        {user.worksAt ? user.worksAt : "Write about yourself"}
      </div>
      <div className="profilechild__followers-info">
        <div className="profilechild__followers">Followers: {user.followers.length}</div>
        <div className="profilechild__following">Following: {user.following.length}</div>
        <div className="profilchilde__posts">Number of posts: {posts.filter(post => post.userId === user._id).length}</div>
      </div>
    </div>
  );
};
export default ProfileCard;
