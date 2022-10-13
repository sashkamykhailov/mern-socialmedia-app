import "./LogoSearch.scss";
import Logo from "../../img/logo.png";

const LogoSearch = () => {
  return (
    <div className="App">
      <img src={Logo} alt="top-left" />
      <input placeholder="Explore" />
    </div>
  );
};

export default LogoSearch;
