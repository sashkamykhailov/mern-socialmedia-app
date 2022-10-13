import Posts from "../Posts/Posts";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfilePageCenter.scss";

const ProfilePageCenter = () => {
  return (
    <div className="ppc">
      <ProfileCard />
      <Posts />
    </div>
  );
};

export default ProfilePageCenter;
