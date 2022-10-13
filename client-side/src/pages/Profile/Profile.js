import ProfilPageLeftSide from "../../components/ProfilPageLeftSide/ProfilPageLeftSide";
import ProfilePageCenter from "../../components/ProfilePageCenter/ProfilePageCenter";
import RightSide from "../../components/Rightside/RightSide";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile-page">
      <ProfilPageLeftSide />
      <ProfilePageCenter />

      <RightSide />
    </div>
  );
};
export default Profile;
