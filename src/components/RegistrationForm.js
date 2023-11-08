// src/components/RegistrationForm.js
import React, { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [name, setName] = useState('');
  const [idOrPassport, setIdOrPassport] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && idOrPassport && phoneNumber && email) {
      const userData = { name, idOrPassport, phoneNumber, email };
      onRegister(userData);

      // Clear the form after registration
      setName('');
      setIdOrPassport('');
      setPhoneNumber('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        ID/Passport Number:
        <input type="text" value={idOrPassport} onChange={(e) => setIdOrPassport(e.target.value)} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Email Address:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
