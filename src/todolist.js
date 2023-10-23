import React, { useEffect, useState } from "react";
import Card from "./cards.js";
function TodoList() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem("taskList");
    if (data !== null) {
      setTaskList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (taskList !== null) {
      window.localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList]);

  const handleSave = () => {
    if (taskName && description) {
      let taskObject = {
        name: taskName,
        description,
      };
      setTaskList([...taskList, taskObject]);
    } else {
      alert("Task Name & Description Cannot Be Empty");
    }
  };

  const deleteTask = (index) => {
    setTaskList(taskList.splice(index));
  };

  return (
    <>
      <div className="modaldiv">
        <form>
          <div className="form-group">
            <input
              name="taskName"
              type="text"
              className="form-control"
              placeholder="Task Name"
              value={taskName}
              onChange={handleOnChange}
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <input
              name="description"
              rows="4"
              className="form-control"
              placeholder="Task Description"
              value={description}
              onChange={handleOnChange}
            ></input>
          </div>
        </form>
        <button onClick={handleSave} className="modalbutton">
          Add Task
        </button>
      </div>
      <div className="taskContainer">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              taskObject={obj}
              index={index}
              key={`card-${index}`}
              deleteTask={deleteTask}
            />
          ))}
      </div>
    </>
  );
}

export default TodoList;
