const Task = (props) => {
  return (
    <div
      className="list"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <span>{props.taskName}</span>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </div>
  );
};

export default Task;
