import React, {useEffect, useState} from "react";
import Buttona from "./button";
import Card from "./cards.js"
function TodoList(save) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  


  const [taskList, setTaskList] = useState([]);

  const handleOnChange = (e) => {
    const  {name, value} = e.target
    if (name === "taskName")
    {
      setTaskName(value)
    }else
    {
      setDescription(value)
    }
  }
  useEffect(() => {
    let arr = localStorage.getItem("taskList")
    if (arr)
    {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const saveTask = (taskObject) => {
    let tempList = taskList
    tempList.push(taskObject)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
  }

  const handleSave = () => {
    let taskObject = {}
    taskObject["Name"] = taskName
    taskObject["Description"] = description
    saveTask(taskObject)
  }

  return (
    <>
      <div className="modaldiv">
      <form>
            <div className="form-group">
                <input name="taskName" type="text" className="form-control" placeholder="Task Name" value={taskName} onChange={handleOnChange}></input>
            </div>
            <div className="form-group">
                <input name="description"rows="4" className="form-control" placeholder="Task Description" value={description}  onChange={handleOnChange}></input>
              </div>
          </form>
		            <button color="primary" onClick={handleSave} className="modalbutton">Add Task</button>
      </div>
    <div className="taskContainer">
      {taskList && taskList.map((obj, index) => <Card taskObject = {obj} index={index}/>)}
    </div>
    </>
  );
}

export default TodoList;