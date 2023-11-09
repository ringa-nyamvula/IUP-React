// src/components/AboutUsPage.js
import React from 'react';

function AboutUsPage() {
  return (
    <div style={{ backgroundColor: '#FFCC00', padding: '20px' }}>
      <h1 style={{ color: 'navy' }}>About Us</h1>
      {/* Your navigation bar here */}
      <h2 style={{ color: 'navy' }}>Our Leadership</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Leader 1 */}
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <img
            src="/images/leader1.jpg" // Replace with the image path
            alt="Leader 1"
            style={{ width: '150px', height: '150px' }}
          />
          <p style={{ color: 'navy' }}>Name of Leader 1</p>
          <p style={{ color: 'navy' }}>Position 1</p>
        </div>
        {/* Leader 2 */}
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <img
            src="/images/leader2.jpg" // Replace with the image path
            alt="Leader 2"
            style={{ width: '150px', height: '150px' }}
          />
          <p style={{ color: 'navy' }}>Name of Leader 2</p>
          <p style={{ color: 'navy' }}>Position 2</p>
        </div>
        {/* Leader 3 */}
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <img
            src="/images/leader3.jpg" // Replace with the image path
            alt="Leader 3"
            style={{ width: '150px', height: '150px' }}
          />
          <p style={{ color: 'navy' }}>Name of Leader 3</p>
          <p style={{ color: 'navy' }}>Position 3</p>
        </div>
        {/* Leader 4 */}
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <img
            src="/images/leader4.jpg" // Replace with the image path
            alt="Leader 4"
            style={{ width: '150px', height: '150px' }}
          />
          <p style={{ color: 'navy' }}>Name of Leader 4</p>
          <p style={{ color: 'navy' }}>Position 4</p>
        </div>
      </div>
      <h2 style={{ color: 'navy' }}>Background</h2>
      <p style={{ color: 'navy' }}>
        The founder members, being parents and people in business, were concerned about the rate of unemployment in the country even after sacrificing so much in educating their children, no jobs were in sight. The founder members are ordinary businessmen and women whose businesses have been greatly affected by the slow economic growth and lack of money circulation in the economy. Additionally, lack of accessibility to credit that is much desired in boosting the business has increasingly become a tall order, in addition to high taxation. Hence, the founder members settled on the only way to influence the economic policy in Kenya was to get involved in politics through a political party (Imarisha Uchumi Party) that will bring together like-minded Kenyans who desire an economically prosperous country.
      </p>
      <p style={{ color: 'navy' }}>
        IUP is a 21st-century Single issue: Economic reforms ideology party in Kenya whose symbol is "Power Lines on A Post," indicating seamless connectivity in solving the economic problems facing Kenyans. However, for success to be realized, there is a need for the citizens to get involved, hence our slogan Inatuhusu, a clarion call to the citizens to be courageous frontline actors in Kenya’s development agenda. IUP stands for:
      </p>
      <ul>
        <li style={{ color: 'navy' }}>Diversity and Inclusivity</li>
        <li style={{ color: 'navy' }}>Honesty</li>
        <li style={{ color: 'navy' }}>Meritocracy</li>
        <li style={{ color: 'navy' }}>Pragmatism</li>
      </ul>
    </div>
  );
}

export default AboutUsPage;
