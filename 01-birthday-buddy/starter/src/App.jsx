import Data from "./data";
import { useState } from "react";

const Person = ({ id, name, age, image }) => {
  return (
    <div className="person">
      <img className="img" src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

const App = () => {
  const [people, setPeople] = useState(Data);

  function handleClick() {
    setPeople([]);
  }

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return (
            <Person
              id={person.id}
              name={person.name}
              age={person.age}
              image={person.image}
            />
          );
        })}

        <button className="btn btn-block" onClick={handleClick}>
          Clear All
        </button>
      </div>
    </main>
  );
};
export default App;
