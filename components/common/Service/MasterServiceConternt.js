import React from "react";
import { FaCheckCircle, FaHistory, FaTools, FaSmile, FaGlobe, FaTags, FaCogs, FaLeaf } from "react-icons/fa";

const MasterServiceContent = ({
  link,
  title,
  service,
  marijuana,
  lastChild,icon,iconBg
}) => {
  return (
    <div
      
    >
      <div style={{
        display:'flex',
        justifyContent:'center',
      }}>
        <div style={{
          backgroundColor:iconBg,
        padding:12,
        borderRadius:"100%"

        }}>
      {icon}

        </div>
      </div>
      <div className="media-body">
        <div style={{
          textAlign:'center',
          paddingTop:10,
          fontSize:16,
          fontWeight:'600',
        }}>{title}</div>
        <div style={{
          textAlign:'center',
          paddingTop:5,
          color:'gray'
        }} >{service}</div>
      </div>
    </div>
  );
};

export default MasterServiceContent;
