import React, { useState, useContext, } from "react";
import { Col, Media, Row, } from "reactstrap";
import ProductItem from "../../../components/common/product-box/ProductBox1";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useRouter } from "next/router";
import PostLoader from "../../../components/common/PostLoader";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import { itemData } from "../../../data/itemData";
import { sectionData } from "../../../data/sectionData";
import banner from '../../../public/assets/images/tools/productBanner.jpeg'


const Popupsidebar = ({ colClass, layoutList }) => {
  const cartContext = useContext(CartContext);
  const quantity = cartContext.quantity;
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const [grid, setGrid] = useState(colClass);
  const symbol = curContext.state.symbol;
  const [layout, setLayout] = useState(layoutList);
const router = useRouter()
const loading =false
  const { category } = router.query;
 const items = itemData.products.items.filter(i=> i.category === category)
const sectionDetails = sectionData.filter(s=> s.title===category)
const data = {
  "products": {
    "__typename": "ProductResponse",
    "total": 5,
    "hasMore": false,
    "items": items
  }
}






;

if(!sectionDetails[0]){
  
  return <div> {category}</div>
}

  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
   
            <div className="collection-product-wrapper">
            <div className="title3">
                <h2 className="title-inner3">{sectionDetails[0].title}</h2>
                <div className="line"></div>
              </div>
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
         
                  {!data ||
                  !data.products ||
                  !data.products.items ||
                  data.products.items.length === 0 ||
                  loading ? (
                    data &&
                    data.products &&
                    data.products.items &&
                    data.products.items.length === 0 ? (
                      <Col xs="12">
                        <div>
                          <div className="col-sm-12 empty-cart-cls text-center">
                            <img
                              src={`/assets/images/empty-search.jpg`}
                              className="img-fluid mb-4 mx-auto"
                              alt=""
                            />
                            <h3>
                              <strong>No Item found</strong>
                            </h3>
                            <h4>Explore more shortlist some items.</h4>
                          </div>
                        </div>
                      </Col>
                    ) : (
                      <div className="row mx-0 mt-3 margin-default">
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
                    )
                  ) : (
                    data &&
                    data.products.items.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductItem
                              des={true}
                              product={product}
                              symbol={symbol}
                              addCompare={() =>
                                compareContext.addToCompare(product)
                              }
                              addWishlist={() =>
                                wishlistContext.addToWish(product)
                              }
                              cartClass="cart-info cart-wrap"
                              addCart={() =>
                                cartContext.addToCart(product, quantity)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </Row>
              </div>
     
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Popupsidebar;
