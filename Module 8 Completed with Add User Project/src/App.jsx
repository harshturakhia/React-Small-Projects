import { useState } from "react";
import "./App.css";

// File Imports
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    console.log(usersList)
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username: uName, age: uAge, id: Math.random().toString() }]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} /> 
      {/* {
        usersList.length === 0 ? 'No users exist' : <UsersList users={usersList} />
      } */}

    </div>
  );
}

export default App;
