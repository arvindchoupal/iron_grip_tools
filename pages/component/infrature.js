import React from 'react';
import { Media } from 'reactstrap';

// Example image sources for factory images (you can replace these with your actual images)
import factoryImage1 from '../../public/assets/images/infratur/1.jpg';
import factoryImage2 from '../../public/assets/images/infratur/2.jpg';
import factoryImage3 from '../../public/assets/images/infratur/5.jpg';

// Common styling for infrastructure section
const sectionStyle = {
  padding: '40px 20px',
  margin: '20px 0',
  borderRadius: '8px',
};

const sectionTitleStyle = {
  fontSize: '24px',
  marginBottom: '15px',
  color: '#0056b3',
  borderBottom: '3px solid #ff6f61',
  display: 'inline-block',
  paddingBottom: '5px',
};

const paragraphStyle = {
  fontSize: '16px',
  margin: '15px 0',
  lineHeight: 1.9,
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  marginTop: '20px',
};

const factoryImageStyle = {
  width: '100%',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const FactoryInfrastructureComponent = () => {
  return (
    <section style={sectionStyle}>
                   <div className="title3">
                <h2 className="title-inner3">Our Factory & Infrastructure</h2>
                <div className="line"></div>
              </div>
      <p style={paragraphStyle}>
        At Iron Grip Tools India, we take pride in our world-class manufacturing infrastructure. Our state-of-the-art factory is equipped with advanced machinery and cutting-edge technology, ensuring that we produce high-quality hand tools with precision and durability. Our production processes are optimized for efficiency and quality, and we maintain strict quality control standards at every stage of production.
      </p>
      
      <p style={paragraphStyle}>
        Here's a glimpse into our factory and the advanced infrastructure that enables us to produce top-tier hand tools:
      </p>

      {/* Image grid showcasing the factory */}
      <div style={gridStyle}>
        <Media src={factoryImage1.src} alt="Factory 1" style={factoryImageStyle} />
        <Media src={factoryImage2.src} alt="Factory 2" style={factoryImageStyle} />
        <Media src={factoryImage3.src} alt="Factory 3" style={factoryImageStyle} />
      </div>


    </section>
  );
};

export default FactoryInfrastructureComponent;
