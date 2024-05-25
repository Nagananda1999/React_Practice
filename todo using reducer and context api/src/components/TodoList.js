import React, { useContext } from 'react'
import { userContext } from '../context/userContext';
import { REMOVE_TODO } from '../context/action';
import "./todo.css"
const TodoList = () => {
  const {todos,dispatch} = useContext(userContext);
  console.log(todos)
  return (
    <div>
      
      <ul>
        {todos.map(todo =>(
          <li key="todo.id">
            {todo.todoString}
            <button 
            onClick={()=>{
              dispatch({
                type:REMOVE_TODO,
                payload:todo.id
              })
            }}
            >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList