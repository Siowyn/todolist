import React, { useEffect, useState } from "react";
import Buttona from "./button";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
function TodoList() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="modaldiv">
      <Buttona color="danger" onClick={toggle}>Click Me</Buttona>
      <Modal isOpen={modal} toggle={toggle} className="modalcontainer">
        <ModalHeader className="modalheader"toggle={toggle}>TODO ADD</ModalHeader>
        <ModalBody className="modalcss">
          <form>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Task Name"></input>
            </div>
            <br></br>
            <div className="form-group">
                <textarea rows="4" className="form-control" placeholder="Task Description"></textarea>
              </div>
          </form>
        </ModalBody>
        <ModalFooter className="modalfooter">
          <Button color="primary" onClick={toggle} className="modalbutton">
           Create
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