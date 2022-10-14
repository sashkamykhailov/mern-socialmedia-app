import Posts from "../Posts/Posts";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfilePageCenter.scss";

const ProfilePageCenter = () => {
  return (
    <div className="ppc"> 
      <ProfileCard />
      <div className="ppc__centerpart">
        <h3>Your posts only: </h3>
        <Posts />
      </div>
    </div>
  );
};

export default ProfilePageCenter;
