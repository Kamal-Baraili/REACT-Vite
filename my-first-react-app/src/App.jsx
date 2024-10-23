import "./App.css";
import Users from "./Users";

function App() {
  const age = 18;
  const isGreen = true;
  const names = ["Kamal", "John", "Mark", "Jennifer", "Mike"];
  const users = [
    { name: "Kamal", age: "25" },
    { name: "John", age: "22" },
    { name: "Mark", age: "23" },
  ];

  return (
    <>
      <div className="container">
        <h1 className="name">Kamal</h1>
        {age >= 18 ? (
          <h2 style={{ color: "green" }}>Eligible</h2>
        ) : (
          <h2 style={{ color: "red" }}>Not Eligible</h2>
        )}

        {isGreen && <button>Login</button>}

        {names.map((nam, key) => {
          return <h3 key={key}>{nam}</h3>;
        })}
      </div>
      {users.map((user, key) => {
        return <Users name={user.name} age={user.age} />;
      })}
    </>
  );
}

export default App;
