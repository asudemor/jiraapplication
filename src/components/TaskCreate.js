import {useState} from 'react';
function TaskCreate({onCreate}) {

    const [title,setTitle] = useState('');
    const [taskDesc,setTaskDesc] = useState('');

    const handleLabelChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleTaskChange = (event) =>{
        setTaskDesc(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(title,taskDesc);
        setTitle('');
        setTaskDesc('');
    }
    
    return ( <div className="task-create">
        <h3>Lütfen Task Ekleyiniz!</h3>
        <form className="task-form">
            <label className="task-label">Başlık</label>
            <input className="task-input" placeholder='Task başlığını giriniz' value={title} onChange={handleLabelChange}></input>
            <label className="task-label">Task Giriniz!</label>
            <textarea className="task-textArea" rows={5} placeholder='Task içeriğini giriniz' value={taskDesc} onChange={handleTaskChange}></textarea>
            <button className="task-button" onChange={handleSubmit}>Oluştur</button>
        </form>
    </div> );
}

export default TaskCreate;