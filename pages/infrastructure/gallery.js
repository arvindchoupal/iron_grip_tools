import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import img1 from '../../public/assets/images/infratur/10.jpg'
import { Media } from 'reactstrap';
const Infrastructure = () => {
  return (
    <CommonLayout parent="Home" title="Infrastructure">
      <div className="infrastructure-page" style={{ padding: '20px', textAlign: 'center' }}>
      <div className="title3">
                <h2 className="title-inner3">Infrastructure</h2>
                <div className="line"></div>
              </div>
        <p style={{ marginTop: '10px', marginBottom: '20px',lineHeight:1.9 }}>
        Our state-of-the-art manufacturing facility is equipped with advanced machinery and technology to produce tools of unmatched precision and reliability. With a highly skilled workforce and stringent quality control measures, we ensure that every product leaving our facility upholds our promise of excellence.

        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {
  [1,2,3,5,6,7,8,9,10,11,12,15,16,17,18,,23,24,26,25,21,19,20].map(i => {
    return (
      <img
        src={`/assets/images/infratur/${i}.jpg`}
        alt={`Factory Image ${i}`}
        width={300}
        height={200}
        key={i} // React requires a unique key for list elements
      />
    );
  })
}
         
        
     
        </div>
        <p style={{ marginTop: '20px' }}>

        </p>
      </div>
    </CommonLayout>
  );
};

export default Infrastructure;