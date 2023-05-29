import Data from "./data";

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
  return (
    <main>
      <div className="container">
        <h3>5 Birthdays Today</h3>
        {Data.map((person) => {
          return (
            <Person
              id={person.id}
              name={person.name}
              age={person.age}
              image={person.image}
            />
          );
        })}
        <Person
          id={Data[0].id}
          name={Data[0].name}
          age={Data[0].age}
          image={Data[0].image}
        />
        <button className="btn btn-block">Clear All</button>
      </div>
    </main>
  );
};
export default App;
