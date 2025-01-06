import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const TopBar = ({ topClass }) => {
  return (
    <div id="topHeader" className={`top-header ${topClass ? topClass : ""}`}>
      <Container>
        <Row>
          <Col lg="6">
            <div  className="header-contact">
              <ul>
                <li>Welcome to Iron Grip Tools</li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  {"Call Us"}:  +91 7087497599
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
