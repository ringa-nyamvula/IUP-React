// src/components/HomePage.js
import React from "react";

function HomePage() {
  return (
    <div style={{ background: "white", padding: "20px", fontSize: "40px" }}>
      <div style={{ textAlign: "left" }}>
        <img
          src="/Images/vision.png"
          alt="Our Vision"
          style={{ width: "100px", height: "100px" }}
        />
        <p style={{ color: "navy", margin: "10px" }}>
          Our Vision: Future-proof Kenya through creative leadership strategies
          to de-risk and optimize sustainable economy in Kenya's development
          agenda.
        </p>
      </div>
      <div style={{ textAlign: "left", marginTop: "20px" }}>
        <img
          src="/Images/mission.png"
          alt="Our Mission"
          style={{ width: "100px", height: "100px" }}
        />
        <p style={{ color: "navy", margin: "10px" }}>
          Our Mission: To energize Kenyans, to inspire moments of patriotism,
          optimism and happiness in sustainable transformation of their country.
        </p>
      </div>
      <div style={{ textAlign: "left", marginTop: "20px" }}>
        <img
          src="/Images/goal.png"
          alt="Goal"
          style={{ width: "100px", height: "100px" }}
        />
        <p style={{ color: "navy", margin: "10px" }}>
          Our Goal: Get Kenya Moving
        </p>
      </div>
    </div>
  );
}

export default HomePage;