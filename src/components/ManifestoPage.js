// src/components/ManifestoPage.js
import React from 'react';

function ManifestoPage() {
  const pageStyle = {
    backgroundColor: '#6D9773',
    padding: '20px',
    color: 'white',
  };

  const headingStyle = {
    color: 'navy',
  };

  const cardStyle = {
    background: 'grey',
    padding: '20px',
    margin: '10px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Our Manifesto</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <p>Political views; prefer a lean, accountable, efficient and effective government whose role is to create a conducive environment for private sector to thrive by providing most services in a free market except in provision of services in Article 43 of the Kenyan constitution:(health, housing, food security, clean and safe water, social security and education), more regulation and services to be provided to all citizens through Public Private sector co-business integration in line with the Public Private Partnership Act of 2021.</p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <p>Land including renewable and non-renewable resources as a factor of production: efficiency in the economy is promoted since owners of resources will be given incentives to maximize land value except for large tracks of land that pose a threat to the country’s security due to terror activities where there will be confiscation of the idle arable land through development of a national land policy through legislations.</p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <p>Labour as a factor of production: labour refers to the effort that individuals exert when they produce a good or service, there will be freedom in labor meaning that no one can tell you what to do in order to earn money, and no one can tell you how to spend it. The value of labor is determined by the individual’s skills, training, education, and productivity. The education system will be revamped to include critical thinking in an effort to ensure Kenyans think start-up, innovation, and creativity.</p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <p>Capital as a factor of production, refers to the money that is used to purchase items that are used to produce goods and services, for this to work there is a need for incentives in economics, is the financial motivation for people to take certain actions. It allows businesses to become more creative and inventive, as everyone competes to have products or services that are better than their competitors to this end IUP administration will shun domestic borrowing.</p>
        </div>

        {/* Card 5 */}
        <div style={cardStyle}>
          <p>Entrepreneurship as a factor of production is a combination of the other three factors to produce a good or service for consumers. Entrepreneurship requires innovative ideas in planning and organizing production of goods and services to create supply and demand hence determining the prices of goods and services. If the good or service you are selling is in high demand, it is worth more. At the heart of entrepreneurship is competition that drives businesses to work at maximum efficiency and offer their products at the best prices with high quality to avoid getting beaten out by competitors that have better prices, efficiency, and quality. To this end IUP administration will legalize industrial hemp, a versatile raw material used in over 9 sectors to produce over 25,000 that is short cycle and environmentally friendly.</p>
        </div>

        {/* Card 6 */}
        <div style={cardStyle}>
          <p>Abolition of distinction between urban and rural: through the combination of agriculture and manufacturing in the same area, in an effort to create markets for farmer's produce so as to avoid losses caused by a lack of markets for farmer’s produce while reducing rural to urban migration.</p>
        </div>
      </div>
    </div>
  );
}

export default ManifestoPage;
