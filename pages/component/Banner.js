import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row } from "reactstrap";

const Banner = () => {
  const settings = {
    dots: false, // Set to true if you want navigation dots
    infinite: true, // Allows infinite looping of slides
    speed: 1000, // Transition speed (in milliseconds)
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enables auto-play
    autoplaySpeed: 5000, // Delay between slides (in milliseconds)
    fade: true, // Adds a fade transition effect
  };

  return (
    <Fragment>
      <section id="tool-bg" className="p-0 height-85 tools_slider">
        <Slider {...settings} className="slide-1 home-slider">
          <div>
            <div className="home text-center home49">
              <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'100%',
              }}> 
   {/* Background image for slide 1 */}

              </div>
           
            </div>
          </div>
          <div>
            <div className="home text-center home51">
              <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'100%',
              }}> 
   {/* Background image for slide 1 */}

              </div>
           
            </div>
          </div>
          <div>
            <div className="home text-center tools-bg0 home50">
              <Container>
                <Row>
                  {/* Additional content for slide 2 */}
                </Row>
                <div className="tools-parts" id="tool-3">
                  {/* Placeholder for additional content */}
                </div>
              </Container>
            </div>
          </div>
          <div>
            <div className="home text-center home53">
              <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'100%',
              }}> 

              </div>
           
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
