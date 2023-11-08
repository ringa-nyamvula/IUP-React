// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ManifestoPage from './components/ManifestoPage';
import StrategiesPage from './components/StrategiesPage';
import ImplementationPage from './components/ImplementationPage';
import ContactsPage from './components/ContactsPage';
import RegistrationForm from './components/RegistrationForm'; // Import the RegistrationForm

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/implementation" element={<ImplementationPage />} />
          <Route path="/contact" element={<ContactsPage />} />
          <Route path="/register" element={<RegistrationForm />} /> {/* Define the route for the registration form */}
          <Route index element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
