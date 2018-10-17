import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SellerDetailContainer from '../containers/seller/SellerDetailContainer';
import SellerWrapperContainer from '../containers/seller/SellerWrapperContainer';
const SellerPage = () => {
  return (
    <PageTemplate>
      <SellerWrapperContainer/>
      <SellerDetailContainer/>
    </PageTemplate>
  );
};

export default SellerPage;