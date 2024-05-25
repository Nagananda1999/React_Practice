import React from 'react'
import { useReducer } from 'react';
import userReducer from './userReducer';
import { userContext } from './userContext';

const Provider = props => {
    const initialState = [{
      todoString:"",
      id:""
    }];

    const [todos,dispatch] = useReducer(userReducer,[]);
  return (
    <userContext.Provider value={{ todos,dispatch }}>
        {props.children}
    </userContext.Provider>
  )
}

export default Provider;