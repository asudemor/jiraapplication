import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleLabelChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz!</label>
            <input
              className="task-input"
              placeholder="Task başlığını giriniz"
              value={title}
              onChange={handleLabelChange}
            ></input>
            <label className="task-label">Task İçeriğini Düzenleyiniz!</label>
            <textarea
              className="task-textArea"
              rows={5}
              placeholder="Task içeriğini giriniz"
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık Giriniz!</label>
            <input
              className="task-input"
              placeholder="Task başlığını giriniz"
              value={title}
              onChange={handleLabelChange}
            ></input>
            <label className="task-label">Task İçeriğiniz Giriniz!</label>
            <textarea
              className="task-textArea"
              rows={5}
              placeholder="Task içeriğini giriniz"
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
