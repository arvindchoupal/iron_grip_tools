import React from 'react';
import { Media } from 'reactstrap';

// Example images for the major products (replace with your actual product images)
import wrenchImage from '../../public/assets/images/tools/101.jpg';
import screwdriverImage from '../../public/assets/images/tools/101.jpg';
import hammerImage from '../../public/assets/images/tools/101.jpg';
import pliersImage from '../../public/assets/images/tools/101.jpg';
import { itemData } from '../../data/itemData';
import { useRouter } from 'next/navigation';

//
// Styling for the Major Products Section
const sectionStyle = {
    padding: '40px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
  
  const sectionTitleStyle = {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#0056b3',
    borderBottom: '3px solid #ff6f61',
    display: 'inline-block',
    paddingBottom: '5px',
  };
  
  const paragraphStyle = {
    fontSize: '16px',
    margin: '15px 0',
    lineHeight: 1.9,
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  };
  
  const productCardStyle = {
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };
  
  const productImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };
  
  const productTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  };
  
  const MajorProductsComponent = () => {
    const router = useRouter()
    return (
      <section style={sectionStyle}>
        <div className="title3">
          <h2 className="title-inner3">Featured Major Products</h2>
          <div className="line"></div>
          </div>
      
        <p style={paragraphStyle}>
          Here are some of the major products from Iron Grip Tools India that are trusted by professionals and industries worldwide:
        </p>
  
        {/* Product Grid */}
        <div style={gridStyle}>
          {/* Wrench Product Card */}
          {itemData.products.items.filter(f=>{
          return f?.featured
          }).map(i=>{
            return (
                <div onClick={()=>{
                    router.push(`/product-details/${i.id}`);
                }} style={productCardStyle}>
                <Media                  src={`/assets/images/tools/${ i.images[0].image_id}.jpg`} alt="Wrench" style={productImageStyle} />
                <h3 style={productTitleStyle}>{i.title}</h3>
                <p style={paragraphStyle}>
                {i.description}
                </p>
              </div>
            )
          })}
 
  
  
    
        </div>
  
        <p style={paragraphStyle}>
          These are just a few examples of the exceptional tools we manufacture at Iron Grip Tools India. Our products are crafted with precision to meet the highest standards of quality and durability.
        </p>
      </section>
    );
  };

export default MajorProductsComponent;
