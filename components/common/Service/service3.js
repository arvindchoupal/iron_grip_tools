import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  svgQualityTools,
  svgExpertGuidance,
  svgFastEfficient,
  svgHandToolServices,
} from "../../../services/script";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgQualityTools,
    title: "Quality Tools",
    service: "High-quality hand tools for every task",
  },
  {
    link: svgExpertGuidance,
    title: "Expert Guidance",
    service: "Professional advice for tool selection and usage",
  },

];

const Service = ({ layoutClass, hrLine }) => {
  return (
    <Fragment>
      <section className={layoutClass}>
        <Container className="absolute-bg">
          <div className="service p-0">
            <Row>
              {Data.map((data, i) => {
                return (
                  <Col
                    key={i}
                    lg="6"
                    sm="6"
                    className={`${
                      hrLine ? "service-block1" : "service-block"
                    }`}
                  >
                    <MasterServiceContent
                      link={data.link}
                      title={data.title}
                      service={data.service}
                      hrLine={hrLine}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Service;
