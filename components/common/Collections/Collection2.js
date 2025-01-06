import React, { useContext } from "react";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ProductItem from "../product-box/ProductBox12";
import { Row, Col, Container } from "reactstrap";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import PostLoader from "../PostLoader";

const GET_PRODUCTS = gql`
  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, indexFrom: $indexFrom, limit: $limit) {
      items {
        id
        title
        description
        type
        brand
        category
        price
        stock
        new
        sale
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;
const TopCollection = ({
  type,
  title,
  subtitle,
  designClass,
  noSlider,
  spanClass,
  productSlider,
}) => {
  const context = useContext(CartContext);
  const contextWishlist = useContext(WishlistContext);
  const contextCompare = useContext(CompareContext);
  const quantity = context.quantity;

  const loading = false

const data = {
  "products": {
    "__typename": "ProductResponse",
    "items": [
      {
        "__typename": "Product",
        "id": 1,
        "title": "Flathead Screwdriver",
        "description": "A versatile flathead screwdriver with an ergonomic grip, ideal for various household and workshop tasks.",
        "type": "hand tools",
        "brand": "Craftsman",
        "category": "Screwdrivers",
        "price": "120",
        "stock": 50,
        "new": "true",
        "sale": "false",
        "discount": "0",
        "variants": [
          {
            "__typename": "Variants",
            "id": "1.1",
            "sku": "flathead01",
            "size": null,
            "color": null,
            "image_id": 101
          }
        ],
        "images": [
          {
            "__typename": "Images",
            "image_id": 101,
            "id": "1.1",
            "alt": "flathead screwdriver",
            "src": "/assets/images/tools/1.jpg"
          }
        ]
      },
      {
        "__typename": "Product",
        "id": 2,
        "title": "Claw Hammer",
        "description": "A durable claw hammer with a polished steel head and a shock-absorbing handle, perfect for carpentry and repairs.",
        "type": "hand tools",
        "brand": "Stanley",
        "category": "Hammers",
        "price": "250",
        "stock": 30,
        "new": "true",
        "sale": "true",
        "discount": "10",
        "variants": [
          {
            "__typename": "Variants",
            "id": "2.1",
            "sku": "hammer01",
            "size": null,
            "color": null,
            "image_id": 102
          }
        ],
        "images": [
          {
            "__typename": "Images",
            "image_id": 102,
            "id": "2.1",
            "alt": "claw hammer",
            "src": "/assets/images/tools/2.jpg"
          }
        ]
      },
      {
        "__typename": "Product",
        "id": 3,
        "title": "Cutting Pliers",
        "description": "A pair of cutting pliers with precision blades and a non-slip handle, ideal for electrical and mechanical tasks.",
        "type": "hand tools",
        "brand": "Bosch",
        "category": "Pliers",
        "price": "180",
        "stock": 40,
        "new": "false",
        "sale": "true",
        "discount": "15",
        "variants": [
          {
            "__typename": "Variants",
            "id": "3.1",
            "sku": "pliers01",
            "size": null,
            "color": null,
            "image_id": 103
          }
        ],
        "images": [
          {
            "__typename": "Images",
            "image_id": 103,
            "id": "3.1",
            "alt": "cutting pliers",
            "src": "/assets/images/tools/3.jpg"
          }
        ]
      },
      {
        "__typename": "Product",
        "id": 4,
        "title": "Adjustable Wrench",
        "description": "An adjustable wrench with a chrome finish, ideal for tightening or loosening bolts of various sizes.",
        "type": "hand tools",
        "brand": "DeWalt",
        "category": "Wrenches",
        "price": "300",
        "stock": 25,
        "new": "true",
        "sale": "false",
        "discount": "0",
        "variants": [
          {
            "__typename": "Variants",
            "id": "4.1",
            "sku": "wrench01",
            "size": null,
            "color": null,
            "image_id": 104
          }
        ],
        "images": [
          {
            "__typename": "Images",
            "image_id": 104,
            "id": "4.1",
            "alt": "adjustable wrench",
            "src": "/assets/images/tools/4.jpg"
          }
        ]
      },
      {
        "__typename": "Product",
        "id": 5,
        "title": "Hand Saw",
        "description": "A high-quality hand saw with a wooden handle and a sharp steel blade, perfect for woodworking tasks.",
        "type": "hand tools",
        "brand": "Makita",
        "category": "Saws",
        "price": "350",
        "stock": 20,
        "new": "false",
        "sale": "true",
        "discount": "10",
        "variants": [
          {
            "__typename": "Variants",
            "id": "5.1",
            "sku": "saw01",
            "size": null,
            "color": null,
            "image_id": 105
          }
        ],
        "images": [
          {
            "__typename": "Images",
            "image_id": 105,
            "id": "5.1",
            "alt": "hand saw",
            "src": "/assets/images/tools/5.jpg"
          }
        ]
      }
    ]
  }
}


  return (
    <>
      <section className={designClass}>
        {noSlider ? (
          <Container>
            <Row>
              <Col>
                <div className="title3">
                  {subtitle ? <h4>{subtitle}</h4> : ""}
                  <h2 className="title-inner3">{title}</h2>
                  <div className="line"></div>
                </div>
                {!data ||
                !data.products ||
                !data.products.items ||
                data.products.items.length === 0 ||
                loading ? (
                  <div className="row mx-0 margin-default">
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                  </div>
                ) : (
                  <Slider
                    {...productSlider}
                    className="product-5 product-m no-arrow"
                  >
                    {data &&
                      data.products.items.slice(0, 8).map((product, index) => (
                        <div key={index}>
                          <ProductItem
                            product={product}
                            spanClass={spanClass}
                            addToCompare={() =>
                              contextCompare.addToCompare(product)
                            }
                            addWishlist={() =>
                              contextWishlist.addToWish(product)
                            }
                            addCart={() => context.addToCart(product, quantity)}
                          />
                        </div>
                      ))}
                  </Slider>
                )}
              </Col>
            </Row>
          </Container>
        ) : (
          <>
            <div className="title1 title-gradient  section-t-space">
              {subtitle ? <h4>{subtitle}</h4> : ""}
              <h2 className="title-inner1">{title}</h2>
              <hr role="tournament6" />
            </div>
            <Container>
              <Row>
                <Col>
                  <Slider {...productSlider} className="product-m no-arrow">
                    {!data ||
                    !data.products ||
                    !data.products.items ||
                    data.products.items.length === 0 ||
                    loading ? (
                      <>
                        <PostLoader />
                        <PostLoader />
                        <PostLoader />
                      </>
                    ) : (
                      data &&
                      data.products.items
                        .slice(0, 8)
                        .map((product, index) => (
                          <ProductItem
                            product={product}
                            spanClass={spanClass}
                            addToCompare={() =>
                              contextCompare.addToCompare(product)
                            }
                            addWishlist={() =>
                              contextWishlist.addToWish(product)
                            }
                            key={index}
                            addCart={() => context.addToCart(product, quantity)}
                          />
                        ))
                    )}
                  </Slider>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </section>
    </>
  );
};

export default TopCollection;
