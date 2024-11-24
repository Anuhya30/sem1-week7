import React from "react";
import "./App.css";

const App = () => {
  const users = [
    { id: 1, name: "Anuhya", email: "anuhya123@example.com" },
    { id: 2, name: "Bargavi", email: "bargavi@example.com" },
    { id: 3, name: "Charitha", email: "charitha@example.com" },
  ];

  return (
    <div className="app">
      <h1 className="header">User Details</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
