import React,{useState} from 'react'


const Task = ({id, task, completed,completeTodo,removeTodo,updateTodo}) => {
    
    const [isEditing,setIsEditing]=useState(false);
    const [editTask,setEditTask]=useState(task);

    const handleUpdate=(e)=>{
        e.preventDefault();
        updateTodo(id,editTask);
        setIsEditing(false);

    }
    return (
        <div className={completed ? "Todo completed" : "Todo"}>
            {isEditing 
            ?(
                <form className='Todo-edit-form' onSubmit={handleUpdate}>
                    <input
                        type='text'
                        name='task'
                        value={editTask}
                        onChange={(e)=>setEditTask(e.target.value)}
                    />
                    <button >Save</button>
                </form>
            )
            :(
            <div classNames='task-text'>
                <li className='Todo-task'><button style={{ background:'rgb(205 122 152)' }}  onClick={completeTodo}>Done/Not Done</button>
                    {task}
                </li>
            </div>
            )}
            
            <div style={{ background:'rgb(105, 122, 152)'}}>
                <buttons style={{ background:'rgb(205 122 152)' }} onClick={()=>setIsEditing(true)}>
                update
                    <i style={{ background:'rgb(205, 122, 152)'}} className="editbtn  fas fa-pen"/>
                </buttons>
                <buttons style={{ background:'rgb(205, 122, 152)'}} onClick={removeTodo}> delete
                    <i style={{ background:'rgb(105, 122, 152)'}} className="fas fa-trash"/>
                </buttons>
            </div>           
        </div>
    )
}
export default Task