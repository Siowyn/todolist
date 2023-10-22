import React from 'react'

const Cards =({taskObject, index, deleteTask}) => {
    
    const handleDelete = () =>{
        deleteTask(index)
    }
  return (
    <div class = "card-wrapper mr-5">
    <div class = "card-top" style={{"background-color": "charteruse"}}></div>
    <div class = "task-holder">
        <span class = "card-header">{taskObject.Name}</span>
        <p className="descriptiontext">{taskObject.Description}</p>

        <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
            <button className="deletbuton" onClick={handleDelete}>Delete</button>
            <i class="fas fa-trash-alt" style = {{"color" : "5DC250"}}></i>
        </div>
</div>
</div>
  )
};

export default Cards;