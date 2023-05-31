import { useState, useEffect } from "react";
import Tour from "./Tour";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetchTours();
  }, []);

  async function fetchTours() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    } catch (e) {}
    setLoading(false);
  }

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <h2 className="title">Our Tours</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      </main>
    );
  }
};
export default App;
