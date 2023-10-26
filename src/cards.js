import React from "react";

const Cards = ({ taskObject, index, deleteTask }) => {
  const handleDelete = () => {
    deleteTask(index);
  };
  return (
    <div className="card-wrapper mr-5">
      <div className="card-top" style={{ backgroundColor: "charteruse" }}></div>
      <div className="task-holder">
        <span className="card-header">{taskObject.name}</span>
        <p className="descriptiontext">{taskObject.description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <button className="deletbuton" onClick={handleDelete}>
            Delete
          </button>
          <i className="fas fa-trash-alt" style={{ color: "5DC250" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Cards;
