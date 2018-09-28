import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SellerDetailContainer from '../containers/seller/SellerDetailContainer';
import SellerWrapper from '../components/seller/SellerWrapper';
const SellerPage = () => {
  return (
    <PageTemplate>
      <SellerWrapper/>
      <SellerDetailContainer/>
    </PageTemplate>
  );
};

export default SellerPage;