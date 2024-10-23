import "./App.css";

function App() {
  const age = 18;
  const isGreen = true;

  return (
    <div className="container">
      <h1 className="name">Kamal</h1>
      {age >= 18 ? (
        <h2 style={{ color: "green" }}>Eligible</h2>
      ) : (
        <h2 style={{ color: "red" }}>Not Eligible</h2>
      )}

      {isGreen && <button>Login</button>}
    </div>
  );
}

export default App;
