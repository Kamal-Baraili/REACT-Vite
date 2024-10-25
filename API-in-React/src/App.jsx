import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [fact, showFact] = useState("");
  const [name, showName] = useState("");
  const [data, showData] = useState(null);
  const [excuse, showExcuse] = useState(null);

  //Cat Fact fetching
  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((dat) => showFact(dat.fact));
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  //Age Fetching

  const fetchAge = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => showData(data));
  };

  useEffect(() => {
    fetchAge();
  }, []);

  //Excuse Fetching
  const fetchExcuse = (type) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${type}/`)
      .then((res) => res.json())
      .then((data) => showExcuse(data[0]));
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <>
      <div className="container">
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{fact}</p>
      </div>

      <div className="second_container">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(event) => showName(event.target.value)}
        />
        <button onClick={fetchAge}>Predict Age</button>
        <h2>Name: {data?.name}</h2>
        <h2>Age: {data?.age}</h2>
      </div>

      <div className="third_container">
        <h1>Generate an excuse</h1>
        <button onClick={() => fetchExcuse("party")}>Party</button> <br />
        <button onClick={() => fetchExcuse("family")}>Family</button> <br />
        <button onClick={() => fetchExcuse("office")}>Office</button> <br />
        <h2>{excuse?.excuse}</h2>
      </div>
    </>
  );
}

export default App;
