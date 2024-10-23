import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTextChange = (event) => setNewTask(event.target.value);

  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTaskList([...taskList, task]);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <div>
        <div className="add_task">
          <input type="text" onChange={handleTextChange} />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="list_container">
          {taskList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
