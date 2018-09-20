import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SellerListContainer from '../containers/seller/SellersListContainer';
import CategoryButton from '../containers/seller/CategoryButton';
import SellerDetailContainer from '../containers/seller/SellerDetailContainer';
import LoginedSellerDetailContainer from '../containers/seller/LoginedSellerDetailContainer';
import SellerOneData from '../containers/seller/SellerOneData';
// import SellerApp from '../containers/seller/SellerApp';
const SellerPage = () => {
  return (
    <PageTemplate>
      <div><CategoryButton/> <SellerOneData/></div>
      <LoginedSellerDetailContainer/>
      <SellerListContainer/>
      <SellerDetailContainer/>
      {/* <SellerApp/> */}
    </PageTemplate>
  );
};

export default SellerPage;