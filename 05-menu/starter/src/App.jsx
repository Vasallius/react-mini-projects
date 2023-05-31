import data from "./data";
import MenuItem from "./MenuItem.jsx";
import { useState } from "react";
const App = () => {
  const [items, setItems] = useState(data);

  function filter(categ) {
    if (categ == "all") {
      setItems(data);
    } else {
      setItems(data.filter((item) => item.category == categ));
    }
  }

  return (
    <section className="menu">
      <h2 className="title">Our Menu</h2>
      <div className="title-underline"></div>
      <div className="btn-container">
        <div onClick={() => filter("all")} className="btn">
          All
        </div>
        <div onClick={() => filter("breakfast")} className="btn">
          Breakfast
        </div>
        <div onClick={() => filter("lunch")} className="btn">
          Lunch
        </div>
        <div onClick={() => filter("shakes")} className="btn">
          Shakes
        </div>
      </div>
      <section className="section-center">
        {/* <MenuItem items={items} /> */}
        {items.map((item) => {
          return <MenuItem {...item} />;
        })}
      </section>
    </section>
  );
};
export default App;
