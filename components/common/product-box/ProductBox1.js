import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, Media, Modal, ModalBody, ModalHeader } from "reactstrap";
import CartContext from "../../../helpers/cart";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import MasterProductDetail from "./MasterProductDetail";

const ProductItem = ({ product, addCart, backImage, des, addWishlist, cartClass, productDetail, addCompare, title }) => {
  // eslint-disable-next-line
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;

  const setQuantity = cartContext.setQuantity;

  const [image, setImage] = useState("");
  const uniqueTags = [];

  const onClickHandle = (img) => {
    setImage(img);
  };



  const clickProductDetail = () => {
    const titleProps = product.title;
    router.push(`/product-details/${product.id}`);
  };

  const variantChangeByColor = (imgId, product_images) => {
    product_images.map((data) => {
      if (data.image_id == imgId) {
        setImage(data.src);
      }
    });
  };
  const imgurl = `/assets/images/tools/${ product.images[0].image_id}.jpg`
  return (
    <div className="product-box product-wrap">
      <div className="img-wrapper">
        <div className="lable-block">
          {product.new === true ? <span className="lable3">new</span> : ""}
          {product.sale === true ? <span className="lable4">on sale</span> : ""}
        </div>
        <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto', // Maintain consistent width
    cursor: 'pointer', // Indicate clickable behavior
    margin: 2, // Add spacing around the product card
  }}
  onClick={clickProductDetail}
>
  <div
    style={{
      border: '1px solid gray',
      height: 'auto',
      width: '100%',
      borderRadius: 8,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
    }}
  >
    <Media
      src={imgurl}
      className="img-fluid"
      alt="Product Image"
      style={{
        maxHeight: '100%',
        maxWidth: '100%',
      }}
    />
  </div>
  <div
    style={{
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      marginTop: 8, // Space between the box and title
      maxWidth: '100%',
    }}
  >
    {product.title || 'Product Title'}
  </div>
</div>


      

      
      </div>
     
    </div>
  );
};

export default ProductItem;
