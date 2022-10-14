import SharePart from "../SharePart/SharePart";
import ListSharedPosts from "../ListSharedPosts/ListSharedPosts";
import './Posts.scss'

const Posts = () => {
  return (
    <div className="posts">
      <SharePart />
      <ListSharedPosts />
    </div>
  );
};
export default Posts;
