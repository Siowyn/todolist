import React, { useEffect, useState } from "react";
import Button from "./button";
import {
  Buttona,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import CreateTask from "./modal.js";
function TodoList() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="modalcontainer">
      <Button color="danger" onClick={toggle}>Click Me</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody className="modalcss">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} className="modalbutton">
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle} className="modalbutton">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TodoList;