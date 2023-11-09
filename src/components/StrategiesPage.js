// src/components/StrategiesPage.js
import React from 'react';

function StrategiesPage() {
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
      <h1 style={headingStyle}>Implementing Strategies for Pillars of Economic Reforms, Single-issue Ideology</h1>

      <p>
        The goal of IUP is to GET THE COUNTRY MOVING. This is in the backdrop of the 2021 Economic survey where it was noted that 3.1 million Kenyans are formally employed while 15.3 million work in the informal sector, which is less structured, making it difficult to widen the tax base. The tragedy is that the 3 million end up facing the brunt of over taxation, hence the need to have more Kenyans onboarded into the formal sector for easier tax collection in the quest to achieve economic reforms, in IUP’s single-issue ideology.
      </p>
      <p>
        For the aforementioned to be achieved, the strategies will be implemented, which will be a learning process for all party levels to benefit from:
      </p>
      <ol>
        <li>Communicate the vision, mission, goal, and ideology to all party members who have not been involved in vision, mission, goal, and ideology formulation.</li>
        <li>Obtain commitment from party members through disclosure and discussions in a consultative process such as meetings and team briefings.</li>
        <li>Framing the vision, mission, goal, ideology, policies, and procedures into action.</li>
        <li>Setting operational targets and objectives that are in line with the party vision, mission, goal, and ideology.</li>
        <li>Assigning responsibility and commensurate authority to individuals and teams for the achievement of the vision, mission, goal, and ideology.</li>
        <li>Allocation of resources and agreeing budgets.</li>
        <li>Providing party leadership and members with the required training.</li>
        <li>Constantly monitoring the success or failure of the strategies and making required revisions.</li>
      </ol>
    </div>
  );
}

export default StrategiesPage;
