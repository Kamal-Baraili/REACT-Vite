import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("green");
  const [count, setCount] = useState(0);
  const [countColor, setCountColor] = useState("black");

  const increaseAge = () => {
    setAge(age + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const changeTextColor = () => {
    setTextColor(textColor == "green" ? "red" : "green");
  };

  const decreaseCount = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCountColor("red");
    }
  };

  const resetCount = () => {
    setCountColor("black");
    setCount(0);
  };

  const increaseCount = () => {
    setCount(count + 1);
    if (count >= 0) {
      setCountColor("green");
    }
  };

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase</button>
      <div className="margin">
        <input type="text" onChange={handleInputChange} />
        {inputValue}
      </div>

      <div className="margin">
        <button onClick={() => setShowText(!showText)}>Show/Hide</button>
        {showText && <h1>This text is visible</h1>}
      </div>

      <div className="margin">
        <button onClick={changeTextColor}>Change Color</button>
        <h1 style={{ color: textColor }}>Hello! My name is Kamal</h1>
      </div>

      <div className="margin counter">
        <h1 style={{ color: countColor }}>{count}</h1>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Set to Zero</button>
        <button onClick={increaseCount}>Increase</button>
      </div>
    </div>
  );
}

export default App;
