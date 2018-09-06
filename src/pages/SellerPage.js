import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SellerListContainer from '../containers/seller/SellersListContainer';
import CategoryButton from '../containers/seller/CategoryButton';
// import SellerApp from '../containers/seller/SellerApp';
const SellerPage = () => {
  console.log(1);
  return (
    <PageTemplate>
      <CategoryButton/>
      <SellerListContainer/>
      {/* <SellerApp/> */}
    </PageTemplate>
  );
};

export default SellerPage;