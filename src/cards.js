import React from 'react'

const Cards =({taskObject, index}) => {
    
  return (
    <div class = "card-wrapper mr-5">
    <div class = "card-top" style={{"background-color": "charteruse"}}></div>
    <div class = "task-holder">
        <span class = "card-header" style={{"background-color": "#F2FAF1", "borderRadius": "10px"}}>{taskObject.Name}</span>
        <p className="descriptiontext">{taskObject.Description}</p>

        <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
            <i class = "far fa-edit mr-3" style={{'color' : 'white'}}></i>
            <i class="fas fa-trash-alt" style = {{"color" : "5DC250"}}></i>
        </div>
</div>
</div>
  )
};

export default Cards;