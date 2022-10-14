import ProfilePart from "../../components/ProfilePart/ProfilePart";
import Posts from "../../components/Posts/Posts";
import RightSide from "../../components/Rightside/RightSide";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <ProfilePart />
      <div className="homepage__centerpart">
        <h3>Live feed: Your posts and posts of people you are following</h3>
        <Posts />
      </div>
      <RightSide />
    </div>
  );
};
export default Homepage;
