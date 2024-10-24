import { useEffect } from "react";

const Text = (props) => {
  useEffect(() => {
    alert("Component Mounted");
    return () => {
      alert("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <input type="text" onChange={props.handleText} />
      <h1>{props.text}</h1>
    </div>
  );
};

export default Text;
