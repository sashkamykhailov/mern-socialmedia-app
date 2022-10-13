import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";

import "./ProfilePart.scss";

const ProfilePart = () => {
  return (
    <div className="profile">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};
export default ProfilePart;
