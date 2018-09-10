import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SellerListContainer from '../containers/seller/SellersListContainer';
import CategoryButton from '../containers/seller/CategoryButton';
import SellerDetailContainer from '../containers/seller/SellerDetailContainer';
// import SellerApp from '../containers/seller/SellerApp';
const SellerPage = () => {
  console.log('12')
  return (
    <PageTemplate>
      {/* <CategoryButton/> */}
      <SellerListContainer/>
      <SellerDetailContainer/>
      {/* <SellerApp/> */}
    </PageTemplate>
  );
};

export default SellerPage;