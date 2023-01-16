import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { DELETE_USERS } from "../constants/Contants";

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <div>
      <h2>UserList</h2>
      <hr />
      {state.users.map((user) => (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Website: {user.website}</p>
          <button
            onClick={()=>dispatch({ type: DELETE_USERS, payload: user.id })}
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserList;
