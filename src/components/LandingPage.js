// src/components/LandingPage.js
import React, { useState } from "react";
//import { Link } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm"; // Import the RegistrationForm

function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRegister = (userData) => {
    setRegisteredUsers([...registeredUsers, userData]);
    setShowForm(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "200px",
        paddingBottom: "400px",
        backgroundImage: 'url("/images/imarisha.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ color: "blue", fontSize: "48px" }}>
        IMARISHA UCHUMI PARTY (UIP)
      </h1>
      <p style={{ color: "blue", fontSize: "36px" }}>Power Line On post</p>
      <br />
      <button
        style={{
          backgroundColor: "yellow",
          padding: "30px",
          borderRadius: "5px",
        }}
        onClick={() => setShowForm(true)}
      >
        REGISTER NOW AS A MEMBER
      </button>

      {showForm && <RegistrationForm onRegister={handleRegister} />}

      {registeredUsers.length > 0 && (
        <div>
          <h2>Registered Users:</h2>
          <ul>
            {registeredUsers.map((user, index) => (
              <li
                key={index}
              >{`${user.name} - ${user.idOrPassport}, ${user.phoneNumber}, ${user.email}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LandingPage;