const url = "https://course-api.com/react-tours-project";

const App = () => {
  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        <div className="single-tour">
          <div className="tour-price">500</div>
          <img
            className="img"
            src="https://www.course-api.com/images/tours/tour-1.jpeg"
            alt=""
          />
          <div className="tour-info">
            <h5>Best of Paris</h5>
            <p style={{ color: "grey" }}>
              Paris is synonymous with the finest things that culture can offer
              — in art, fashion, food, literature, and ideas. On this tour, your
              Paris-savvy Rick Steves guide will immerse you in the very best of
              ...
            </p>
            <p className="info-btn">Read More</p>
            <h5 className="btn  btn-block delete-btn">Not Interested</h5>
          </div>
        </div>
      </div>
    </main>
  );
};
export default App;
