
import React from 'react';
import './App.css';
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import Provider from './context/Provider';



const App = () => {
  console.log("component reredering")
  return (
    
    <Provider>
      <div className="App">
      
        <br />
        <Todo/>
        <br />
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
