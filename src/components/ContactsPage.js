// src/components/ContactUsPage.js
import React from "react";
import { Link } from "react-router-dom";

function ContactUsPage() {
  const pageStyle = {
    backgroundColor: "white",
    padding: "30px",
    color: "navy",
    fontSize: "40px",
  };

  const headingStyle = {
    color: "navy",
    fontSize: "72px",
    marginBottom: "130px",
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Reach Out</h1>

      <p>
        IMARISHA UCHUMI PARTY (IUP) <br />
        CANAAN WANJOHI BLOCK,
        <br /> GIATHIEKO OFF EASTERN BYPASS <br />
        P.O. BOX 865-00521 NAIROBI, www.iup.co.ke <br />
        Tel: 0722387470 | Email: imarishauchumiparty@gmail.com
      </p>
      <br />
      <br />

      <Link to="/register" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "yellow",
            color: "black",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          REGISTER AS A USER
        </button>
      </Link>
    </div>
  );
}

export default ContactUsPage;