// import LogoSearch from "../LogoSearch/LogoSearch";
import InfoCard from "../InfoCard/InfoCard";

import "./ProfilPageLeftSide.scss";
import FollowersCard from "../FollowersCard/FollowersCard";

const ProfilPageLeftSide = () => {
  return (
    <div className="pls">
      {/* <LogoSearch /> */}
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfilPageLeftSide;
