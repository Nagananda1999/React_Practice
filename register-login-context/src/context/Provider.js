import React,{useContext, useReducer} from 'react'
import {UserContext} from "./UserContext"
import {userReducer} from "./reducer"
import {LOGIN, REGISTER} from "./action.types";
const Provider = props => {
    const initialState = {
        users:[],
        loggedUser:null,
    }
    const [state,dispatch] = useReducer(userReducer,initialState);
    const register = (userData) => {
      const registeredUser = state.users.find(
        (user) => user.email===userData.email && user.name === userData.name
      );
      if(registeredUser){
        //alert("Already Existing user");

        //if user is already registred isRegistred is set true
        return true;
      }
      else{
        dispatch({
          type: REGISTER,
          payload: userData,
        });
        return false;
      }
      };
    
      const login =  (userData) => {
        const loggedUser = state.users.find(
          (user) => user.name === userData.name && user.password === userData.password
        );
        if(loggedUser){
          dispatch({
            type: LOGIN,
            payload: userData,
          });
          return true;
        }else{
          return false;
        }
      };
    
      const logout = () => {
        dispatch({
          type: 'LOGOUT',
        });
      };

  return (
    <UserContext.Provider
       value={{register,
        state,
        login,
        logout
        }}
    >
        {props.children}
    </UserContext.Provider>
  )
}

export default Provider;