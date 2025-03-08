import React from "react";
import ProgressBar from "./progressBar"; // Import ProgressBar component
import TickIcon from "./tickIcon"; // Import TickIcon component

function ListItem({ task }) {
  return (
    <div className="list-item"> {/* Task container */}
      
      <div className="info"> {/* Task details section */}
        <TickIcon /> {/* Tick icon for task status */}
        <h3 className="title1">{task.title}</h3> {/* Task title */}
        <ProgressBar /> {/* Progress bar */}
      </div>

      <div className="buttons"> {/* Buttons container */}
        <button className="edit" >EDIT</button> {/* Edit task */}
        <button className="delete">DELETE</button> {/* Delete task */}
      </div>
      
    </div>
  );
}

export default ListItem;
