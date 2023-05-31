import { useState } from "react";

const Tour = ({ price, name, info, image }) => {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div className="single-tour">
      <div className="tour-price">${price}</div>
      <img className="img" src={image} alt="" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p style={{ color: "grey" }}>
          {toggle ? info : info.substr(0, 200)} ...
        </p>
        <p className="info-btn" onClick={handleClick}>
          Read More
        </p>
        <h5 className="btn  btn-block delete-btn">Not Interested</h5>
      </div>
    </div>
  );
};

export default Tour;
