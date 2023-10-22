import React, {useEffect, useState} from "react";
import Card from "./cards.js"
import { Alert } from 'reactstrap';
function TodoList(save) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


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
    if(taskName && description)
    {
      let taskObject = {}
      taskObject["Name"] = taskName
      taskObject["Description"] = description
      saveTask(taskObject)
    }else
    {
      alert("Task Name & Description Cannot Be Empty")
    }
  }

  const deleteTask = (index) =>{
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)

  }

  return (
    <>
      <div className="modaldiv">
      <form>
            <div className="form-group">
                <input name="taskName" type="text" className="form-control" placeholder="Task Name" value={taskName} onChange={handleOnChange}></input>
            </div>
            <br></br>
            <div className="form-group">
                <input name="description"rows="4" className="form-control" placeholder="Task Description" value={description}  onChange={handleOnChange}></input>
              </div>
          </form>
		            <button onClick={handleSave} className="modalbutton">Add Task</button>
      </div>
    <div className="taskContainer">
      {taskList && taskList.map((obj, index) => <Card taskObject = {obj} index={index} deleteTask = {deleteTask}/>)}
    </div>
    </>
  );
}

export default TodoList;