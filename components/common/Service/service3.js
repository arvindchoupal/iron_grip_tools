import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  svgQualityTools,
  svgExpertGuidance,
  svgGlobalReach,
  svgCustomization,
  svgCompetitivePricing,
  svgEnvironment,
} from "../../../services/script"; // Add more SVGs here as needed
import MasterServiceContent from "./MasterServiceConternt";
import { FaCheckCircle, FaHistory, FaTools, FaSmile, FaGlobe, FaTags, FaCogs, FaLeaf } from "react-icons/fa";

const Data = [
  {
    title: "Unmatched Quality",
    iconBg: "#e5dfff", // Light purple background
    iconColor: "#7b61ff", // Purple
    description: "Durable tools meeting global standards.",
    icon: <FaCheckCircle color="#7b61ff" size={30} />,
  },
  {
    title: "Legacy of Expertise",
    iconBg: "#fde3ea", // Light pink background
    iconColor: "#ff5c8d", // Pink
    description: "Decades of trusted tool innovation.",
    icon: <FaHistory color="#ff5c8d" size={30} />,
  },
  {
    title: "Diverse Product Range",
    iconBg: "#d8f8d8", // Light green background
    iconColor: "#00c853", // Green
    description: "Tools for every industry and need.",
    icon: <FaTools color="#00c853" size={30} />,
  },
  {
    title: "Customer-Centric Approach",
    iconBg: "#ffe6d5", // Light orange background
    iconColor: "#ff9a59", // Orange
    description: "Exceptional support and guidance.",
    icon: <FaSmile color="#ff9a59" size={30} />,
  },
];


const Service = ({ layoutClass, hrLine }) => {
  return (
    <Fragment>
      <section className={layoutClass}>
        <Container className="absolute-bg">
          <div className="service p-0">
            <Row>
              {Data.map((data, i) => (
                <Col
                  key={i}
                  lg="3"
                  md="6"
                  className={` mb-4`}
                >
                  <MasterServiceContent
                    title={data.title}
                    service={data.description}
                 icon={data.icon}
                 iconBg={data.iconBg}
                 />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Service;
