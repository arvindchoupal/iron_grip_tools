import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const TopBarDark = ({ topClass, fluid }) => {
  const router = useRouter();
  const Logout = () => {
    localStorage.setItem("user", false);
    router.push("/page/account/login-auth");
  };
  return (
    <div style={{
      backgroundColor:"#031122",
      padding:10,
      color:'white',
      flexDirection:'row',
      justifyContent:'center'

    }} className={""}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to Iron Grip Tools India</li>
                <li style={{
                  marginLeft:30
                }}>
                  <i style={{
                    marginRight:5
                  }} className="fa fa-phone text-white" aria-hidden="true"></i>
                  Call Us:  +91 7087497599
                </li>
              </ul>
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
