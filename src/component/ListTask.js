import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {completeTodo,addTodo,removeTodo,updateTodo} from '../redux/actions'
import AddTask from './AddTask'
import Task from './Task'

const TodoList = () => {
    const state= useSelector((state)=>({...state.todos}));
    const dispatch=useDispatch();

    
    const create=(newTodo) =>{
        dispatch(addTodo(newTodo))
    };

    const update=(id,updatedTask)=>{
        dispatch(updateTodo({id,updatedTask}))
    }

    return (
        <div className='TodoList'>
            <h1>Todo app using react Redux</h1>
            
            <AddTask createTodo={create}/>

            
            <ul>
                <hr className='style-eight'/>
                    {state.todos && 
                    state.todos.map((todo)=>{
                        return(
                            <div key={todo.id} >
                           
                            <Task
                                key={todo.id}
                                id={todo.id}
                                task={todo.task}
                                completed={todo.completed}
                                completeTodo={()=>dispatch(completeTodo(todo))}
                                removeTodo={()=>dispatch(removeTodo(todo))}
                                updateTodo={update}
                            />
                            </div>
                        )
                    })} 
            </ul>
        </div>
    )
}
export default TodoList