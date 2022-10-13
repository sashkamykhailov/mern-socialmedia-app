import { Trends } from "../../utils/Trends/Trends";
import SingleTrend from "../SingleTrend/SingleTrend";
import "./TrendsBlock.scss";

const TrendsBlock = () => {
  return (
    <div className="trends">
      <div className="trends__title">Trends for you</div>
      {Trends.map((trend, i) => {
        return <SingleTrend key={i} trend={trend} />;
      })}
      <div className="trends__share-btn">
        <button className="trends__sharebuton">Share</button>
      </div>
    </div>
  );
};
export default TrendsBlock;
