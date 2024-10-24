import { useState } from "react";
import "./index.css";
import { useEffect } from "react";

function App() {
  const [fact, showFact] = useState("");

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((dat) => showFact(dat.fact));
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="container">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
