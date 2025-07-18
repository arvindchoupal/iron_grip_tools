import React, { Fragment, useContext } from "react";
import Slider from "react-slick";
import { tools_product_4 } from "../../services/script";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import CartContext from "../../helpers/cart";
import { CompareContext } from "../../helpers/Compare/CompareContext";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";
import { WishlistContext } from "../../helpers/wishlist/WishlistContext";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "../../components/common/product-box/ProductBox12";

const GET_PRODUCTS = gql`
  query productByCategory($category: String!) {
    productByCategory(category: $category) {
      id
      title
      description
      type
      brand
      collection
      category
      price
      sale
      discount
      new
      images {
        image_id
        id
        alt
        src
      }
      variants {
        variant_id
        id
        sku
        size
        color
        image_id
      }
    }
  }
`;

const ParallaxSlider = () => {
  const context = useContext(CartContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const wishListContext = useContext(WishlistContext);

  var { data } = useQuery(GET_PRODUCTS, {
    variables: {
      category: "tools",
    },
  });

  return (
    <Fragment>
      <section className="full-banner parallax small-slider tools-parallax-product">
        <Container>
          <Row>
         
            <Col lg="12" className="tools-grey ratio_square">
              <Slider
                {...tools_product_4}
                className="tools-product-4 product-m"
              >
                {data &&
                  data.productByCategory.slice(0, 8).map((data, i) => {
                    return (
                      <ProductItem
                        product={data}
                        key={i}
                        spanClass={true}
                        addToCompare={() => compareContext.addToCompare(data)}
                        addCart={() => context.addToCart(data)}
                        addWishlist={() => wishListContext.addToWish(data)}
                      />
                    );
                  })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ParallaxSlider;
