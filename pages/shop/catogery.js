import React,{useState} from 'react';
import CommonLayout from '../../components/shop/common-layout';
// import { withApollo } from '../../helpers/apollo/apollo';
import Popupsidebr from './common/Popupsidebr';
import { Container, Row} from 'reactstrap';
import Category from '../component/Category';
function Catogery() {
  return (
    <CommonLayout title="collection" parent="home" >
            <Container>
                <Category hideTop={true} />

            </Container>
</CommonLayout>
  )
}

export default Catogery