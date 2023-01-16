import React, {createContext} from "react";

// create a reducer function

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
    // set useReducer
    
  return (
    <UserContext.Provider value={{ /* pass values of reducer*/ }}>
      {children}
    </UserContext.Provider>
  );
};