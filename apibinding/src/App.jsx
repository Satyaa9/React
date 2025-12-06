import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    setUsers(userData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {selectedUser ? (
        <div
          style={{
            border: "1px solid #64b5f6",
            padding: "12px",
            margin: "10px",
            marginTop: "9rem",
            backgroundColor: "#e3f2fd",
            width: "320px",
            height: "250px",
            borderRadius: "10px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ fontSize: "20px", marginBottom: "8px" }}>
            {selectedUser.name}
          </h1>

          <p style={{ fontSize: "14px", margin: "4px 0" }}>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p style={{ fontSize: "14px", margin: "4px 0" }}>
            <strong>Username:</strong> {selectedUser.username}
          </p>
          <p style={{ fontSize: "14px", margin: "4px 0" }}>
            <strong>Phone:</strong> {selectedUser.phone}
          </p>
          <p style={{ fontSize: "14px", margin: "4px 0" }}>
            <strong>Website:</strong> {selectedUser.website}
          </p>

          <h3 style={{ fontSize: "16px", marginTop: "10px" }}>Address:</h3>

          <p style={{ fontSize: "14px", margin: "4px 0" }}>
            {selectedUser.address.street}, {selectedUser.address.suite},{" "}
            {selectedUser.address.city}
          </p>

          <p style={{ fontSize: "14px", margin: "4px 0" }}>
            <strong>ZIP:</strong> {selectedUser.address.zipcode}
          </p>

          <button
            onClick={() => setSelectedUser(null)}
            style={{
              marginTop: "12px",
              padding: "8px 14px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Back to User List
          </button>
        </div>
      ) : users.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            style={{
              backgroundColor: "#e3f2fd",
              padding: "12px",
              margin: "8px",
              borderRadius: "8px",
              border: "1px solid #90caf9",
              cursor: "pointer",
              width: "340px",
              transition: "0.3s",
            }}
            onClick={() => handleUserClick(user)}
          >
            <h2 style={{ fontSize: "18px", margin: "5px 0" }}>{user.name}</h2>
            <p style={{ fontSize: "14px", margin: "4px 0" }}>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
