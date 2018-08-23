import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MarketListContainer from 'containers/market/MarketListContainer';

const MarketPage = () => {
  return (
    <PageTemplate>
      <MarketListContainer/>
    </PageTemplate>
  );
};

export default MarketPage;