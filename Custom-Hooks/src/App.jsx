import "./index.css";
import { useToggle } from "./useToggle";

function App() {
  const [isVisible, change] = useToggle(false);

  return (
    <div className="container">
      <button onClick={change}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
