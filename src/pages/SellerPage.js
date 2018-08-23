import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SellerListContainer from '../containers/seller/SellersListContainer';

const SellerPage = () => {
  return (
    <PageTemplate>
      Seller 페이지 템플릿 적용
      <SellerListContainer/>
    </PageTemplate>
  );
};

export default SellerPage;