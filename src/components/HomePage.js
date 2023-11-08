// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import RegistrationForm from './RegistrationForm';

function LandingPage() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleRegister = (userData) => {
    setRegisteredUsers([...registeredUsers, userData]);
    setShowForm(false);
  };

  useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'blue' }}>IMARISHA UCHUMI PARTY (UIP)</h1>
      <p style={{ color: 'blue' }}>Power Line On post</p>

      {showForm ? (
        <RegistrationForm onRegister={handleRegister} />
      ) : (
        <div>
          <p>Thank you for registering!</p>
          <button onClick={() => setShowForm(true)}>Register Again</button>
        </div>
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
