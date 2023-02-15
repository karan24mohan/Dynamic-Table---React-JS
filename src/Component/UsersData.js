import React from "react";

const UsersData = ({users}) => {
  return (
    <>
      
      {users.map((curElement) => {
          const { id, name, email, address } = curElement;
        return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address.city}</td>
        </tr>
      )
      })}
    </>
  );
};

export default UsersData;
