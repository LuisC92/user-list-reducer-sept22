import React, { createContext, useReducer, useEffect } from "react";
import { GET_USERS } from "../constants/Contants";
import axios from "axios"

const initialState ={users: []}
// create a reducer function
const reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);

  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.payload};
    default:
      return state;
  }
};


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // set useReducer
const [state, dispatch] = useReducer(reducer, initialState)

useEffect(()=>{
  // optional: use axios to fetch
  axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    dispatch({type: GET_USERS, payload:response.data});
  })
},[])
  return (
    <UserContext.Provider
      value={
        {
          /* pass values of reducer*/
          state, dispatch
        }
      }
    >
      {children}
    </UserContext.Provider>
  );
};
