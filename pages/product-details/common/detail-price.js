import React, { useState, useContext } from "react";
import Link from "next/link";
import sizeChart from "../../../public/assets/images/size-chart.jpg";
import { Modal, ModalBody, ModalHeader, Media, Input } from "reactstrap";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import CartContext from "../../../helpers/cart";
import CountdownComponent from "../../../components/common/widgets/countdownComponent";
import MasterSocial from "./master_social";

const DetailsWithPrice = ({ item, stickyClass, changeColorVar }) => {
  const product = item;


  

  return (
    <>
      <div className={`product-right ${stickyClass}`}>
        <h2> {product.title} </h2>
      
      
       
  
 
        <div className="border-product">
          <h6 className="product-title">product details</h6>
          <p>{product.description}</p>
        </div>

        {product?.table &&

        product.table.map(t=>{
          return (
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%' ,marginBottom:20}}>
            <thead style={{
              backgroundColor:'#051022'
            }}>
              <tr>
                {t.column.map((col) => (
                  <th   style={{
                    border: '1px solid white',
                    padding: '8px',
                    textAlign: 'left',
                    color:'white'
                  }} key={col.field}>{col.field}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row, index) => (
                <tr key={index}>
                  {t.column.map((col) => (
                    <td   style={{
                      border: '1px solid black',
                      padding: '8px',
                      textAlign: 'left',
                    }} key={col.field} align="center" >{row[col.field]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          )
        }

        )
        
   
        
      }
   
   
      </div>
    </>
  );
};

export default DetailsWithPrice;
