import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const { state } = useContext(UserContext);

  return (
    <div>
      <h2>UserList</h2>
      {state.users.map((user) => (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Website: {user.website}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default UserList;
