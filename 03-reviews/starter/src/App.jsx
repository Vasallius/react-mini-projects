import { GrPrevious, GrNext } from "react-icons/gr";
import Review from "./Review";
import { useState } from "react";
import Reviews from "./data";

const App = () => {
  function nextClick() {
    if (index != Reviews.length - 1) {
      setindex(index + 1);
    }
  }

  function prevClick() {
    if (index != 0) {
      setindex(index - 1);
    }
  }

  function randomClick() {
    let x = Math.floor(Math.random() * Reviews.length);

    setindex(x);
  }

  const [index, setindex] = useState(0);
  return (
    <main>
      <div className="review">
        <Review index={index} reviews={Reviews} />
        <div className="btn-container">
          <button onClick={prevClick} className="prev-btn">
            <GrPrevious />
          </button>
          <button onClick={nextClick} className="next-btn">
            <GrNext />
          </button>
        </div>
        <button onClick={randomClick} className="btn">
          Surprise Me
        </button>
      </div>
    </main>
  );
};
export default App;
