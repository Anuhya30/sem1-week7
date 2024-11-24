import React, { useState, useRef } from "react";
import "./App.css";


import addIcon from "./assets/add-icon.png";
import editIcon from "./assets/edit-icon.png";
import deleteIcon from "./assets/delete-icon.png";

function App() {
  const [tasks, setTasks] = useState([]); 
  const [taskInput, setTaskInput] = useState(""); 
  const [editIndex, setEditIndex] = useState(null); 
  const inputRef = useRef(null); 

  
  const handleAddOrUpdateTask = () => {
    if (taskInput.trim() === "") return;

    if (editIndex !== null) {
     
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = taskInput;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
     
      setTasks([...tasks, { text: taskInput, completed: false }]);
    }

    setTaskInput("");
    inputRef.current.focus();
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setTaskInput(tasks[index].text);
    setEditIndex(index);
    inputRef.current.focus();
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          ref={inputRef}
        />
        <button onClick={handleAddOrUpdateTask}>
          <img src={addIcon} alt="Add" />
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="no-tasks-message">No tasks available. Add a new task!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
              <span onClick={() => handleToggleComplete(index)}>{task.text}</span>
              <div className="task-actions">
                <button onClick={() => handleEditTask(index)}>
                  <img src={editIcon} alt="Edit" />
                </button>
                <button onClick={() => handleDeleteTask(index)}>
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
