import React, { useContext, useState } from 'react'
import { userContext } from '../context/userContext';
import { ADD_TODO } from '../context/action';
import { v4 } from 'uuid';
const Todo = () => {
  const [todoString, settodoString] = useState("");
  const {dispatch} = useContext(userContext);
  // console.log("Component Rerendering")
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(todoString === ""){
      return alert("Enter valid String");
    }
    const todo = {
      todoString,
      id:v4()
    };
    dispatch({
      type:ADD_TODO,
      payload:todo
    });
    console.log(todoString);
    settodoString("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="todo"
        id="todo" 
        placeholder="type your todo"
        value={todoString}
        onChange={e => settodoString(e.target.value)} />
        &nbsp;&nbsp;&nbsp;
        <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default Todo;