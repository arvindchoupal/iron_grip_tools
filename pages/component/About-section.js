import React, { Fragment } from "react";
import { Row, Col, Container } from "reactstrap";

// Icons can be imported or passed as URLs
import { FaCheckCircle, FaWrench, FaGlobe, FaHandshake } from "react-icons/fa";

const AboutSection = () => {
  const whyChooseUs = [
    {
      title: "Uncompromising Quality",
      iconBg: "#e5dfff", // Light purple background
      iconColor: "#7b61ff", // Purple

      description:
        "Tools that meet and exceed international standards, ensuring superior reliability and efficiency.",
      icon: <FaCheckCircle color="#7b61ff" size={50} />,
    },
    {
      title: "Customization",
      iconBg: "#fde3ea", // Light pink background
      iconColor: "#ff5c8d", // Pink
      description:
        "Tailored solutions designed to meet the specific requirements of our clients.",
      icon: <FaWrench color="#ff5c8d" size={50} />,
    },
    {
      title: "Global Reach",
      iconBg: "#d8f8d8", // Light green background
      iconColor: "#00c853", // Green

      description:
        "Expertise in managing large-scale exports with efficient and seamless logistics.",
      icon: <FaGlobe color="#00c853" size={50} />,
    },
    {
      title: "Customer-Centric Approach",
      iconBg: "#ffe6d5", // Light orange background
      iconColor: "#ff9a59", // Orange

      description:
        "Dedicated support and after-sales service to ensure complete customer satisfaction.",
      icon: <FaHandshake color="#ff9a59" size={50} />,
    },
  ];

  return (
    <Fragment>
      <section style={{ backgroundColor: "#f9f9f9", padding: "50px 0" }}>
        <Container>
          <Row>
            <Col lg="8" className="m-auto text-center">
              <div className="title3">
                <h2 className="title-inner3">Why Choose Iron Grip Tools India?</h2>
                <div className="line"></div>
              </div>
              <div className="about-text">
                <p style={{
                    fontWeight:'600'
                }}>
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
                    backgroundColor:item.iconBg,
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
                <p style={{ color: "gray", fontSize: "13px", marginTop: "10px",lineHeight:1.8 }}>
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
