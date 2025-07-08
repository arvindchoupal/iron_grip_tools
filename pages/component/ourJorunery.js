import React, { useState } from 'react';

const OurAchievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const achievements = [
    {
      title: '1000+ Products Manufactured',
      description: 'We have proudly manufactured over 1000 high-quality hand tools with precision and durability.',
      icon: '🏗️',
    },
    {
      title: '15+ Years of Experience',
      description: 'With more than 15 years in the industry, we’ve built a legacy of trust and expertise.',
      icon: '🎖️',
    },
    {
      title: '25+ Export Destinations',
      description: 'Our products are trusted and exported to over 25 countries around the globe.',
      icon: '🌎',
    },
    {
      title: 'ISO Certified',
      description: 'We are ISO 9001 certified, ensuring quality and reliability in every product we manufacture.',
      icon: '📜',
    },
  ];

  const sectionStyle = {
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '30px',
    color: '#0056b3',
    marginBottom: '40px',
    fontWeight: 'bold',
    borderBottom: '3px solid #ff6f61',
    display: 'inline-block',
    paddingBottom: '10px',
  };

  const achievementCardStyle = (isHovered) => ({
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '280px', // Max width to ensure the cards don't get too large
    boxShadow: isHovered
      ? '0 8px 12px rgba(0, 0, 0, 0.2)' // Stronger shadow on hover
      : '0 4px 6px rgba(0, 0, 0, 0.1)', // Default shadow
    textAlign: 'center',
    marginBottom: '30px',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.3s ease-in-out', // Smooth transition
    cursor: 'pointer',
  });

  const iconStyle = {
    fontSize: '40px',
    color: '#ff6f61',
    marginBottom: '15px',
  };

  const achievementTitleStyle = (isHovered) => ({
    fontSize: '18px',
    fontWeight: 'bold',
    color: isHovered ? '#ff6f61' : '#0056b3', // Change color on hover
    marginBottom: '10px',
  });

  const achievementDescriptionStyle = {
    fontSize: '14px',
    color: 'gray',
    lineHeight:1.4
  };

  return (
    <section style={sectionStyle}>
           <div className="title3">
                <h2 className="title-inner3">Our Achievements</h2>
                <div className="line"></div>
              </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        {achievements.map((achievement, index) => (
          <div
            key={index}
            style={achievementCardStyle(hoveredIndex === index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle}>{achievement.icon}</div>
            <h3 style={achievementTitleStyle(hoveredIndex === index)}>
              {achievement.title}
            </h3>
            <p style={achievementDescriptionStyle}>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAchievements;
