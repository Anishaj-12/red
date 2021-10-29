import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'react-uuid';

function TodoItem({ todo }) {
    const [list,setList]=useState([])
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    
    const doneTodo=(id)=>{
        setList(list.map(todo=>(todo.id===id ? {...todo, done:!todo.done}:todo)))
        }

        const filterTodo=()=>{
            setList(list.filter(todo=>todo.done===false))
          }
          const filterTodoUndone=()=>{
            setList(list.filter(todo=>todo.done===true))
          }
          
         
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
                </div>
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name
                        }))
                        if(editable) {
                         setName(todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
<button  type="button" class="btn btn-warning" onClick={filterTodo}>done</button>
    <button type="button" class="btn btn-secondary" onClick={filterTodoUndone}>undone</button>
{list.map(todo=> <div>
      
       <h1 className={todo.done ? "done" : "undone"} >{todo.name}</h1>
       <button  onClick={()=>doneTodo(todo.id)}>{todo.done ? "done": "undone"}</button>


      </div> )}
                      







                  <button type="button" class="btn btn-dark"  onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem