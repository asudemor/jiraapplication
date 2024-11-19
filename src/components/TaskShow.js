import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteTask = () => {
    onDelete(task.id);
  };

  const handleEditTask = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true}></TaskCreate>
      ) : (
        <div>
          <h3 className="task-IdTitle">
            {task.id} {task.title}{" "}
          </h3>
          <h4>Görev İçeriği</h4>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteTask}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditTask}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
