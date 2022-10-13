import "./SingleTrend.scss";

const SingleTrend = ({ trend }) => {
  return (
    <div className="singletrend">
      <div className="singletrend__title">{trend.name}</div>
      <div className="singletrend__amount">{trend.shares}k shares</div>
    </div>
  );
};
export default SingleTrend;
