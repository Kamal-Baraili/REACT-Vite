import { useState } from "react";
import "./index.css";
import Text from "./Text";

function App() {
  const [text, setShow] = useState("");
  const [showText, setShowText] = useState(false);

  const handleText = (event) => {
    setShow(event.target.value);
  };

  const showorhideText = () => {
    setShowText(!showText);
  };

  return (
    <div className="container">
      <button onClick={showorhideText}>Show/Hide</button>
      {showText && <Text text={text} handleText={handleText} />}
    </div>
  );
}

export default App;
