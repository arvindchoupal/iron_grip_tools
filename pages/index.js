import React, { Fragment, useEffect } from "react";
import HeaderSix from "../components/headers/Header-six";
import Banner from "./component/Banner";
import Service from "../components/common/Service/service3";
import AboutSection from "./component/About-section";
import Category from "./component/Category";
import ParallaxSlider from "./component/ParallaxSlider";
import TopCollection from "../components/common/Collections/Collection2";
import LogoBlock from "../components/common/logo-block";
import NewProduct from "../components/common/Collections/TabCollection3";
import { Product4 } from "../services/script";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import HeaderFive from "../components/headers/Header-five";

const Tools = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#ff4c3b");
  });

  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={"/assets/images/favicon/1.png"}
        />
      </Helmet>
      <div className="tools-bg">
      <HeaderFive
        logoName={"logo.jpg"}
        direction="left"
        topClass="top-header top-header-dark3"
      />
        {/* <HeaderSix logoName={"logo.jpg"} direction="right" /> */}
        <Banner />
        <Service layoutClass="banner-padding absolute-banner pb-0 tools-service" />
        <AboutSection />
        <Category />
      
      
     
        <MasterFooter
          footerClass={"sticky-footer  blur-up lazyloaded"}
          footerLayOut={"white-layout"}
          footerSection={"small-section"}
          belowSection={"section-b-space darken-layout"}
          logoName={"layout4/footerlogo.jpg"}
          layoutClass={"dark-subfooter"}
          newLatter={false}
        />
      </div>
    </Fragment>
  );
};

export default Tools;
