import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MarketListContainer from 'containers/market/MarketListContainer';
import MarketDetailContainer from 'containers/market/MarketDetailContainer';

const MarketPage = () => {
  return (
    <PageTemplate>
      <MarketListContainer/>
      <MarketDetailContainer/>
    </PageTemplate>
  );
};

export default MarketPage;