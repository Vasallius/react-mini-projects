import data from "./data";
import MenuItem from "./MenuItem.jsx";
import { useState } from "react";
const App = () => {
  const [items, setItems] = useState(data);
  return (
    <section className="menu">
      <h2 className="title">Our Menu</h2>
      <div className="title-underline"></div>
      <div className="btn-container">
        <div className="btn">All</div>
        <div className="btn">Breakfast</div>
        <div className="btn">Lunch</div>
        <div className="btn">Shakes</div>
      </div>
      <section className="section-center">
        {/* <MenuItem items={items} /> */}
        {items.map((item) => {
          console.log({ ...item });
          return <MenuItem {...item} />;
        })}
      </section>
    </section>
  );
};
export default App;
