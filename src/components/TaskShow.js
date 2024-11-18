function TaskShow({ task }) {
  return (
    <div className="task-show">
      <h3 className="task-IdTitle">
        {task.id} {task.title}{" "}
      </h3>
      <h4>Görev İçeriği</h4>
      <p>{task.taskDesc}</p>
      <div>
        <button className="task-delete">Sil</button>
        <button className="task-edit">Güncelle</button>
      </div>
    </div>
  );
}

export default TaskShow;
