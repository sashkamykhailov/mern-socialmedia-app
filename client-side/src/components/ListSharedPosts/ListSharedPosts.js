
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SingleSharedPost from "../SingleSharedPost/SingleSharedPost";
import { getTimelinePosts } from '../../redux/actions/PostAction'

import { useEffect } from "react";

import "./ListSharedPosts.scss";

const ListSharedPosts = () => {

  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if(!posts) return 'No Posts';
  if(params.id) posts = posts.filter((post)=> post.userId===params.id)

  return (
    <div className="sharelist">
      {posts ?
       posts.map((post, id) => {
        return <SingleSharedPost post={post} key={id} />;
      })
      : "Loading..."
    }
    </div>
  );
};
export default ListSharedPosts;
