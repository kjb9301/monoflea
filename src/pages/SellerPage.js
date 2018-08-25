import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SellerListContainer from '../containers/seller/SellersListContainer';

const SellerPage = () => {
  return (
    <PageTemplate>
      <SellerListContainer/>
    </PageTemplate>
  );
};

export default SellerPage;