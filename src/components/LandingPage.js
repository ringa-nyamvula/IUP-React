// src/components/LandingPage.js
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm'; // Import the RegistrationForm

function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRegister = (userData) => {
    setRegisteredUsers([...registeredUsers, userData]);
    setShowForm(false);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1 style={{ color: 'blue' }}>IMARISHA UCHUMI PARTY (UIP)</h1>
      <p style={{ color: 'blue' }}>Power Line On post</p>
      <button
        style={{ backgroundColor: 'yellow' }}
        onClick={() => setShowForm(true)}
      >
        Register as a User
      </button>

      {showForm && (
        <RegistrationForm onRegister={handleRegister} />
      )}

      {registeredUsers.length > 0 && (
        <div>
          <h2>Registered Users:</h2>
          <ul>
            {registeredUsers.map((user, index) => (
              <li key={index}>{`${user.name} - ${user.idOrPassport}, ${user.phoneNumber}, ${user.email}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
