import {MdDelete} from 'react-icons/md' 
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTodo, toggleComplete, deleteTodo} from '../reducers/todoSlice'
import { useSelector } from 'react-redux';

function TodoCard() {

    const todos = useSelector(state => state.todos);
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(task))
        setTask("")
    }

    return(
        <div className="todos-container">
            <form className="card">
                <div className="search-btn">
                    <input value={task} onChange={(event)=> setTask(event.target.value)} className = "text-todo" type="text" placeholder="Add todo.."></input>
                    <button onClick = {onSubmit} className="addTodos">+</button>
                </div>
                <div className="todos">
                    <ul className="list-todos">
                        {todos.map((e) => (
                        <li key={e.id} className={`task-completed-${e.completed}`}>
                            <input checked = {e.completed} onChange = {()=>(dispatch(toggleComplete({id:e.id, completed: !e.completed})))} className="chkbox" type="checkbox" ></input>
                            <p>{e.task}</p>
                            <MdDelete className='deleteBtn' onClick={()=> dispatch(deleteTodo({id: e.id}))}/>
                        </li> 
                        ))}
                        
                    </ul>
                </div>
            </form> 
        </div>
    )
}

export default TodoCard;