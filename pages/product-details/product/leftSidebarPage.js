import React, { useState, useEffect, useRef } from "react";
import ProductTab from "../common/product-tab";
import Service from "../common/service";
import NewProduct from "../../shop/common/newProduct";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ImageZoom from "../common/image-zoom";
import DetailsWithPrice from "../common/detail-price";
import Filter from "../common/filter";
import { Container, Row, Col, Media } from "reactstrap";
import { itemData } from "../../../data/itemData";



const LeftSidebarPage = ({ pathId }) => {
  const loading =false

  const items = itemData.products.items.filter(i=>i.id===parseInt(pathId))
console.log(items)
const data ={
  product:items[0]
}
  // const [state, setState] = useState({ nav1: null, nav2: null });
  // const slider1 = useRef();
  // const slider2 = useRef();

  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };

  const sliderNav = {
    slidesToShow: data?.product?.images?.length,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    focusOnSelect: true,
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);



  const changeColorVar = (img_id) => {
    slider2.current?.slickGoTo(img_id);
  };


  return (
    <section className="">
      <div className="collection-wrapper">
        <Container>
          <Row>
        
            <Col lg="12" sm="12" xs="12">
              <Container fluid={true}>
             
                {!data || !data.product || data.product.length === 0 || loading ? (
                  "loading"
                ) : (
                  <Row>
                    <Col lg="6" className="product-thumbnail">
                      <Slider {...products} asNavFor={nav2} ref={(slider) => setSlider1(slider)} className="product-slick">
                        {data.product.images.map((vari, index) => (
                          <div key={index}>
                            <ImageZoom image={vari} path={`/assets/images/tools/${ vari.image_id}.jpg`}/>
                          </div>
                        ))}
                      </Slider>
                      {data.product.variants.length > 1 && (
                        <Slider className="slider-nav" {...sliderNav} asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
                          {data.product.images.map((item, i) => (
                            <div key={i}>
                              <Media src={`/assets/images/tools/${ item.image_id}.jpg`} key={i} alt={item.alt} className="img-fluid" />
                            </div>
                          ))}
                        </Slider>
                      )}
                    </Col>
                    <Col lg="6" className="rtl-text product-ps">
                      <DetailsWithPrice item={data.product} changeColorVar={changeColorVar} />
                    </Col>
                  </Row>
                )}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default LeftSidebarPage;
