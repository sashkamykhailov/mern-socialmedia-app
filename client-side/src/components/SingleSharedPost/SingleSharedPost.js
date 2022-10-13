import {useSelector} from 'react-redux';
import {useState} from 'react'
import "./SingleSharedPost.scss";
import { likePost } from '../../api/PostsRequests';

const SingleSharedPost = ({ post }) => {

  const {user} = useSelector(state => state.authReducer.authData);

  const [liked, setLiked] = useState(post.likes.includes(user._id))
  const [likes, setLikes] = useState(post.likes.length)

  const handleLike = () => {
    likePost(post._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
       
  return (
    <div className="sharedpost">
      <div className="sharedpost__image">
        <img className="sharedpost__img" alt='post' src={post.image ? process.env.REACT_APP_PUBLIC_FOLDER + post.image : ""}/>
      </div>
      <div className="sharedpost__reactions">
        <button 
        className="sharedpost__likes-btn"
        onClick={handleLike}
        >
          {liked ? 'This post is liked' : 'Like it'}
          </button>
        <div className="sharedpost__likes">{likes} likes</div>
        <div className="sharedpost__comments">Comment it</div>
        <div className="sharedpost__shares">Share it</div>
      </div>
      <div className="sharedpost__likes-amount">{post.likes} Likes</div>
      <div className="sharedpost__user-data">
        <div className="sharedpost__username">{post.name}</div>
        <div className="sharedpost__user-text">{post.desc}</div>
      </div>
    </div>
  );
};

export default SingleSharedPost
