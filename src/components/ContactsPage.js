// src/components/ContactUsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function ContactUsPage() {
  const pageStyle = {
    backgroundColor: 'white',
    padding: '20px',
    color: 'navy',
  };

  const headingStyle = {
    color: 'navy',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Reach Out</h1>

      <p>
        IMARISHA UCHUMI PARTY (IUP)
        CANAAN WANJOHI BLOCK, GIATHIEKO OFF EASTERN BYPASS
        P.O. BOX 865-00521 NAIROBI, www.iup.co.ke
        Tel: 0722387470 | Email: imarishauchumiparty@gmail.com
      </p>

      <Link to="/register" style={{ textDecoration: 'none' }}>
        <button style={{ backgroundColor: 'yellow', color: 'black' }}>Register as a User</button>
      </Link>
    </div>
  );
}

export default ContactUsPage;
