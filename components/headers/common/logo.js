import React, { Fragment } from "react";
import Link from "next/link";

const LogoImage = ({ logo }) => {
  return (
    <Fragment>
      <Link href={"/"}>
        {/* <a> */}
        <img
          src={`/assets/images/icon/${logo ? logo : "logo.jpg"}`}
          alt=""
          style={{
            height:80,
            width:150
          }}
          className="img-fluid"
        />
        {/* </a> */}
      </Link>
    </Fragment>
  );
};

export default LogoImage;
