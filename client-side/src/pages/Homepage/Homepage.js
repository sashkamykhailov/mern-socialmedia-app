import ProfilePart from "../../components/ProfilePart/ProfilePart";
import Posts from "../../components/Posts/Posts";
import RightSide from "../../components/Rightside/RightSide";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <ProfilePart />
      <Posts />
      <RightSide />
    </div>
  );
};
export default Homepage;
