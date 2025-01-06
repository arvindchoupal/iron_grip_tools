import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
// import { withApollo } from '../../helpers/apollo/apollo';
import LeftSidebarPage from './product/leftSidebarPage';
import { itemData } from '../../data/itemData';

const LeftSidebar = () => {
  
  const router = useRouter();
  const id = router.query.id;

  const itemDetails = itemData.products.items.filter(i=>i.id ===parseInt(id))
  
  return (
    <CommonLayout parent="Home" title="Product">
        <LeftSidebarPage pathId={id} />
      <ProductSection catogery={itemDetails[0].category} />
    </CommonLayout>
  );
}


export default LeftSidebar;