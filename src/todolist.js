import React, {useEffect, useState} from "react";
import Buttona from "./button";
import Card from "./cards.js"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
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
    setModal(false)
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
      <Buttona color="danger" onClick={toggle}>Add Task</Buttona>

      <Modal isOpen={modal} toggle={toggle} save={saveTask}className="modalcontainer">
        <ModalHeader className="modalheader"toggle={toggle}>Add Task</ModalHeader>
        <ModalBody className="modalcss">
          <form>
            <div className="form-group">
                <input name="taskName" type="text" className="form-control" placeholder="Task Name" value={taskName} onChange={handleOnChange}></input>
            </div>
            <br></br>
            <div className="form-group">
                <textarea name="description"rows="4" className="form-control" placeholder="Task Description" value={description}  onChange={handleOnChange}></textarea>
              </div>
          </form>
        </ModalBody>
        <ModalFooter className="modalfooter">
          <Button color="primary" onClick={handleSave} className="modalbutton">
           Create
          </Button>{' '}
          <Button className="ghostbutton">m</Button>
          <Button color="secondary" onClick={toggle} className="modalbutton">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    <div className="taskContainer">
      {taskList && taskList.map((obj, index) => <Card taskObject = {obj} index={index}/>)}
    </div>
    </>
  );
}

export default TodoList;