// src/components/ImplementationPage.js
import React from "react";

function ImplementationPage() {
  const pageStyle = {
    backgroundColor: "#666769",
    padding: "50px",
    color: "white",
    fontSize: "36px",
  };

  const headingStyle = {
    color: "navy",
    fontSize: "72px",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>
        Evaluating the Economic Reforms, Single-issue Ideology
      </h1>

      <p style={{ textAlign: "center" }}>
        Evaluation of the ideology will be undertaken using the following
        process:
      </p>
      <br />
      <ol style={{ listStylePosition: "outside" }}>
        <li>Creating a credible baseline plan.</li>
        <li>
          Periodically updating the plan with actual tasks-based progress and
          actual costs incurred.
        </li>
        <li>
          Instigate a program of formal quality reviews to assure quality
          ideology deliverables.
        </li>
        <li>
          Compare the baseline with the updated plan (planned vs actual
          analysis) to determine how closely current progress and cost match the
          original plan.
        </li>
        <li>
          Implement appropriate strategies and tactics to address real and
          projected variances outside designated tolerances.
        </li>
      </ol>
    </div>
  );
}

export default ImplementationPage;