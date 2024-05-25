import {REGISTER,LOGIN,LOGOUT} from "./action.types";

export const userReducer = (state, action) => {
    switch(action.type){
        case REGISTER:
                return{
                    ...state,
                users:[...state.users,action.payload],
                };
        case LOGIN:
            return{
                ...state,
                user:action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};