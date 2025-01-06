import React, { useState, useEffect } from "react";
import Currency from "./common/currency";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Cart from "../containers/Cart";
import CartContainer from "../containers/CartContainer";
import TopBar from "./common/topbar";
import { Media, Container, Row, Col } from "reactstrap";
import LogoImage from "./common/logo";
import cart from "../../public/assets/images/jewellery/icon/cart.png";
import search from "../../public/assets/images/jewellery/icon/search.png";
import settings from "../../public/assets/images/icon/setting.png";
import SearchOverlay from "./common/search-overlay";

const HeaderSix = ({ logoName, direction }) => {
  /*=====================
         Pre loader
         ==========================*/
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
  }, []);

  

  return (
    <div>
      <header className="header-tools">
        <div className="mobile-fix-option"></div>
        <TopBar />
        <div className="logo-menu-part">
          <Container>
            <Row>
              <Col sm="12">
                <div className="main-menu">
                  <div className="menu-left">
                    <div className="navbar">
                    </div>
                    <div className="brand-logo">
                      <LogoImage logo={logoName} />
                    </div>
                  </div>
                  <div className="menu-right pull-right">
                    <NavBar />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <SearchOverlay />
    </div>
  );
};

export default HeaderSix;
