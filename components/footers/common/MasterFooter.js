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
      marginTop:40
    }}>
      
      <footer className={footerClass}>
        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row className="footer-theme partition-f">
            
          
              <Col lg="4" md="6">
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
                    <p>
                    Crafted with precision and built to last, our hand tools are designed to deliver unmatched reliability and efficiency. Whether you're working on small home projects or large industrial tasks, our tools are made for ultimate performance.
                    </p>
                
                  </div>
                </Collapse>
              </Col>
              <Col >
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 3 ? "active" : ""
                    } `}>
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(3);
                        } else setIsOpen(true);
                      }}>
                     Top Items
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 3 ? isOpen : false) : true}>
                    <div className="footer-contant">
                    <ul>

                      {itemData.products.items.slice(0,5).map(s=>{
                        return (
                          <li>
                          <a href={`/product-details/${s.id}`}>{s.title}</a>
                        </li>
                        )
                      })}
                       
                      
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col >
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 3 ? "active" : ""
                    } `}>
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(3);
                        } else setIsOpen(true);
                      }}>
                      Top Catogeries
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 3 ? isOpen : false) : true}>
                    <div className="footer-contant">
                    <ul>

                      {sectionData.slice(0,5).map(s=>{
                        return (
                          <li>
                          <a href={s.link}>{s.title}</a>
                        </li>
                        )
                      })}
                       
                      
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col >
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
                    <div className="footer-contant">
                      <ul className="contact-list">
                        <li>
                          <i className="fa fa-map-marker"></i>Dholewal Chowk, Ludhiana Pin 141003
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>Call Us:  +91 7087497599
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>Email Us:{" "}
                          <a href="#">exports@irongriptools.in</a>
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
