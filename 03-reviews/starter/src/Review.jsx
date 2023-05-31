import { FaQuoteRight } from "react-icons/fa";

const Review = ({ index, reviews }) => {
  return (
    <>
      <div className="img-container">
        <img src={reviews[index].image} alt="" className="person-img" />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <div className="author">{reviews[index].name}</div>
      <div className="job">{reviews[index].job}</div>
      <div className="info">{reviews[index].text}</div>
    </>
  );
};
export default Review;
