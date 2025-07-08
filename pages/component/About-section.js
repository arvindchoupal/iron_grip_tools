import React, { Fragment } from "react";
import { Row, Col, Container } from "reactstrap";
import { FaCheckCircle, FaHistory, FaTools, FaSmile, FaGlobe, FaTags, FaCogs, FaLeaf } from "react-icons/fa";

const AboutSection = () => {
  const whyChooseUs = [
    {
      title: "Unmatched Quality",
      iconBg: "#e5dfff", // Light purple background
      iconColor: "#7b61ff", // Purple
      description:
        "Our hand tools are crafted with precision using the finest materials, ensuring durability, reliability, and superior performance. Each tool undergoes rigorous quality checks to meet international standards like ISO and ANSI.",
      icon: <FaCheckCircle color="#7b61ff" size={50} />,
    },
    {
      title: "Legacy of Expertise",
      iconBg: "#fde3ea", // Light pink background
      iconColor: "#ff5c8d", // Pink
      description:
        "With decades of experience in the hand tools industry, we are a trusted name in delivering innovative and efficient tools for professionals and DIY enthusiasts alike.",
      icon: <FaHistory color="#ff5c8d" size={50} />,
    },
    {
      title: "Diverse Product Range",
      iconBg: "#d8f8d8", // Light green background
      iconColor: "#00c853", // Green
      description:
        "From wrenches and pliers to precision screwdrivers and custom tool kits, we offer a comprehensive range of hand tools designed to meet the needs of various industries, including automotive, construction, and manufacturing.",
      icon: <FaTools color="#00c853" size={50} />,
    },
    {
      title: "Customer-Centric Approach",
      iconBg: "#ffe6d5", // Light orange background
      iconColor: "#ff9a59", // Orange
      description:
        "Your satisfaction is our priority. We provide exceptional customer service, detailed product guidance, and after-sales support to ensure you get the best experience.",
      icon: <FaSmile color="#ff9a59" size={50} />,
    },
    {
      title: "Global Reach",
      iconBg: "#d5e8ff", // Light blue background
      iconColor: "#007bff", // Blue
      description:
        "We are proud exporters, delivering premium tools to markets across the globe, including the United States, Europe, and Asia. Wherever you are, we make our tools accessible to you.",
      icon: <FaGlobe color="#007bff" size={50} />,
    },
    {
      title: "Competitive Pricing",
      iconBg: "#ffe6f5", // Light pink background
      iconColor: "#d500f9", // Magenta
      description:
        "We believe in offering the best value for money. Our hand tools combine top-tier quality with affordable pricing, making them an ideal choice for professionals and businesses.",
      icon: <FaTags color="#d500f9" size={50} />,
    },
    {
      title: "Customization & Solutions",
      iconBg: "#e0ffe5", // Light greenish background
      iconColor: "#2e7d32", // Dark green
      description:
        "Need a tool customized to your specific needs? We specialize in providing tailored solutions for businesses, government institutes, and industries with unique requirements.",
      icon: <FaCogs color="#2e7d32" size={50} />,
    },
    {
      title: "Environmentally Conscious",
      iconBg: "#fff4d5", // Light yellow background
      iconColor: "#ffab00", // Amber
      description:
        "We are committed to sustainable manufacturing processes, ensuring our tools are built with minimal environmental impact while maintaining top-notch quality.",
      icon: <FaLeaf color="#ffab00" size={50} />,
    },
  ];

  return (
    <Fragment>
      <section style={{  padding: "50px 0" }}>
        <Container>
          <Row>
            <Col lg="8" className="m-auto text-center">
              <div className="title3">
                <h2 className="title-inner3">Why Choose Iron Grip Tools India?</h2>
                <div className="line"></div>
              </div>
              <div className="about-text">
                <p style={{ fontWeight: "600" }}>
                  We are committed to sustainability and ethical business
                  practices. From reducing our environmental footprint through
                  efficient manufacturing processes to supporting local
                  communities, we strive to make a positive impact in everything
                  we do.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            {whyChooseUs.map((item, index) => (
              <Col lg="3" md="6" key={index} className="mb-4">
                <div
                  style={{
                    backgroundColor: item.iconBg,
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  {item.icon}
                </div>
                <h5 style={{ fontWeight: "600", marginTop: "15px" }}>
                  {item.title}
                </h5>
                <p
                  style={{
                    color: "gray",
                    fontSize: "13px",
                    marginTop: "10px",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AboutSection;
