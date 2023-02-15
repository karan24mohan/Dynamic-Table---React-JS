import "./App.css";
import { useEffect, useState } from "react";
import UsersData from "./Component/UsersData";
const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th> id </th> 
            <th> name </th> 
            <th> email </th> 
            <th> address </th>
          </tr>
        </thead>
        <tbody> 
      <UsersData users={users} />
        </tbody>
      </table>
    </>
  );
}

export default App;
