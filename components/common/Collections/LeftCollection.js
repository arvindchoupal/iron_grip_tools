import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Slider from 'react-slick';
import { Media } from 'reactstrap';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';




const LeftCollection = ({type ,border,product}) => {
    
    const curContext =  useContext(CurrencyContext);
    const currency = curContext.state;
    

    const data = {
        "products": {
            "__typename": "ProductResponse",
            "items": [
                {
                    "__typename": "Product",
                    "id": 1,
                    "title": "Precision Cutting Saw",
                    "description": "Engineered for accuracy, this saw is ideal for woodworking and metal cutting, featuring a fine blade for clean cuts.",
                    "type": "tools",
                    "brand": "Bosch",
                    "category": "Cutting Tools",
                    "price": "850",
                    "stock": 30,
                    "new": "true",
                    "sale": "true",
                    "discount": "10",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 101,
                            "id": "1",
                            "alt": "precision cutting saw",
                            "src": "/assets/images/tools/pro/1.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 2,
                    "title": "Ergonomic Claw Hammer",
                    "description": "A lightweight hammer with a comfortable grip for reducing hand strain during prolonged use.",
                    "type": "tools",
                    "brand": "Stanley",
                    "category": "Hammers",
                    "price": "650",
                    "stock": 40,
                    "new": "true",
                    "sale": "false",
                    "discount": "5",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 102,
                            "id": "2",
                            "alt": "ergonomic claw hammer",
                            "src": "/assets/images/tools/pro/2.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 3,
                    "title": "Adjustable Spanner Wrench",
                    "description": "A versatile spanner with adjustable jaw for a variety of nut and bolt sizes.",
                    "type": "tools",
                    "brand": "Taparia",
                    "category": "Wrenches",
                    "price": "720",
                    "stock": 20,
                    "new": "true",
                    "sale": "false",
                    "discount": "8",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 103,
                            "id": "3",
                            "alt": "adjustable spanner wrench",
                            "src": "/assets/images/tools/pro/3.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 4,
                    "title": "Foldable Utility Knife",
                    "description": "Compact and foldable knife with a replaceable blade, perfect for cutting boxes and other materials.",
                    "type": "tools",
                    "brand": "Stanley",
                    "category": "Knives",
                    "price": "480",
                    "stock": 15,
                    "new": "true",
                    "sale": "true",
                    "discount": "15",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 104,
                            "id": "4",
                            "alt": "foldable utility knife",
                            "src": "/assets/images/tools/pro/4.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 5,
                    "title": "Magnetic Screwdriver Set",
                    "description": "A set of magnetic screwdrivers for enhanced precision, featuring multiple head types.",
                    "type": "tools",
                    "brand": "Bosch",
                    "category": "Screwdrivers",
                    "price": "900",
                    "stock": 35,
                    "new": "true",
                    "sale": "true",
                    "discount": "20",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 105,
                            "id": "5",
                            "alt": "magnetic screwdriver set",
                            "src": "/assets/images/tools/pro/5.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 6,
                    "title": "Heavy-Duty Pipe Wrench",
                    "description": "A strong and durable wrench for plumbing tasks, with adjustable jaws for a secure grip.",
                    "type": "tools",
                    "brand": "Taparia",
                    "category": "Wrenches",
                    "price": "1150",
                    "stock": 25,
                    "new": "true",
                    "sale": "false",
                    "discount": "10",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 106,
                            "id": "6",
                            "alt": "heavy-duty pipe wrench",
                            "src": "/assets/images/tools/pro/6.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 7,
                    "title": "Compact Multi-Tool",
                    "description": "A pocket-sized multi-tool with pliers, screwdrivers, and a knife for various tasks.",
                    "type": "tools",
                    "brand": "Leatherman",
                    "category": "Multi-Tools",
                    "price": "1650",
                    "stock": 10,
                    "new": "true",
                    "sale": "true",
                    "discount": "15",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 107,
                            "id": "7",
                            "alt": "compact multi-tool",
                            "src": "/assets/images/tools/pro/7.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 8,
                    "title": "Digital Caliper",
                    "description": "Measure with extreme precision using this digital caliper, ideal for engineering and DIY tasks.",
                    "type": "tools",
                    "brand": "Mitutoyo",
                    "category": "Measuring Tools",
                    "price": "2200",
                    "stock": 8,
                    "new": "true",
                    "sale": "false",
                    "discount": "5",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 108,
                            "id": "8",
                            "alt": "digital caliper",
                            "src": "/assets/images/tools/pro/8.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 9,
                    "title": "LED Headlamp",
                    "description": "Keep your hands free with this powerful LED headlamp, perfect for low-light working conditions.",
                    "type": "tools",
                    "brand": "Philips",
                    "category": "Lighting",
                    "price": "950",
                    "stock": 50,
                    "new": "true",
                    "sale": "true",
                    "discount": "10",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 109,
                            "id": "9",
                            "alt": "LED headlamp",
                            "src": "/assets/images/tools/pro/9.jpg"
                        }
                    ]
                },
                {
                    "__typename": "Product",
                    "id": 10,
                    "title": "Ratcheting Wrench Set",
                    "description": "A set of wrenches with a ratcheting mechanism for quick and easy fastening.",
                    "type": "tools",
                    "brand": "Bosch",
                    "category": "Wrenches",
                    "price": "1200",
                    "stock": 12,
                    "new": "true",
                    "sale": "true",
                    "discount": "10",
                    "variants": [],
                    "images": [
                        {
                            "__typename": "Images",
                            "image_id": 110,
                            "id": "10",
                            "alt": "ratcheting wrench set",
                            "src": "/assets/images/tools/pro/10.jpg"
                        }
                    ]
                }
            ]
        }
    }
    return (
        <div className={`theme-card ${border} `}>
            <h5 className="title-border">new product</h5>
            <Slider className="offer-slider slide-1">
                <div>
                    {data && data.products.items.slice(0, product).map((product, index) =>
                        <div className="media" key={index}>
                            <a href={product.images[0].src}>
                                <Media alt="" className="img-fluid blur-up lazyload" src={product.images[0].src} /></a>
                            <div className="media-body align-self-center">
                                <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                <a href={product.images[0].src}>
                                    <h6>{product.title}</h6>
                                </a>
                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {data && data.products.items.slice(3, 6).map((product, index) =>
                        <div className="media" key={index}>
                            <a href={product.images[0].src}>
                                <Media alt="" className="img-fluid blur-up lazyload" src={product.images[0].src} /></a>
                            <div className="media-body align-self-center">
                                <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                <a href={product.images[0].src}>
                                    <h6>{product.title}</h6>
                                </a>
                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </Slider>
        </div>
    )
}

export default LeftCollection;