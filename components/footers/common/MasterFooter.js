import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";
import { sectionData } from "../../../data/sectionData";
import { itemData } from "../../../data/itemData";

const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  CopyRightFluid,
  newLatter,
}) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth <= 767;
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth <= 767) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener("resize", changeCollapse);
    };
  }, []);
  return (
    <div style={{
    }}>
      
      <footer className={footerClass}>
        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row className="footer-theme partition-f">
            
          
              <Col lg="6" md="6">
                <div
                  className={`footer-title ${
                    isOpen && collapse == 1 ? "active" : ""
                  } footer-mobile-title`}>
                  <h4
                    onClick={() => {
                      setCollapse(1);
                      setIsOpen(!isOpen);
                    }}>
                    about
                    <span className="according-menu"></span>
                  </h4>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 1 ? isOpen : false) : true}>
                  <div className="footer-contant">
                    <div className="footer-logo">
                      <LogoImage logo={logoName} />
                    </div>
                    <p style={{
                      fontWeight:'500',
                      fontSize:15
                    }} >
                                       Crafted with precision and built to last, our hand tools are designed to deliver unmatched reliability and efficiency. Whether you're working on small home projects or large industrial tasks, our tools are made for ultimate performance.

                            </p>
                    <p>
                    </p>
                
                  </div>
                </Collapse>
              </Col>
        
              <Col  lg="6" md="6">
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 4 ? "active" : ""
                    } `}>
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(4);
                        } else setIsOpen(true);
                      }}>
                      company 
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 4 ? isOpen : false) : true}>
                    <div  className="footer-contant">
                      <ul className="contact-list">
                        <li>
                          <i className="fa fa-map-marker"></i><div style={{
                      fontWeight:'500',
                      fontSize:15
                    }} >
                      Dholewal Chowk, Ludhiana Pin 141003
                            </div> 
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>
                          <div style={{
                      fontWeight:'500',
                      fontSize:15
                    }} >
                     Call Us:  +91 7807954787
                            </div>
                          
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>
                          <div style={{
                      fontWeight:'500',
                      fontSize:15
                    }} >
                         Email Us:{" "}
                        exports@irongriptools.in
                            </div>
                    
                        </li>
                      
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

   
      </footer>
    </div>
  );
};
export default MasterFooter;
