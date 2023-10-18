import React, {useState} from 'react';
import Button from "./button";
import { Buttona, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreateTask from "./modal.js";
function TodoList() {
  const [modal, setModal] = useState(false);

  const toggle=() => setModal(!modal);

  return (
  <>
  <div className='todobutton'>
    <Button onClick={() => setModal(true)}>Create Task</Button>
  </div>
  <div className='task-container'>

  </div>
  <CreateTask toggle={toggle} modal={modal}/>
  </>
  );
}

export  default TodoList;
