import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MarketListContainer from 'containers/market/MarketListContainer';
import MarketDetailContainer from 'containers/market/MarketDetailContainer';
import MarketDeleteContainer from 'containers/market/MarketDeleteContainer';

const MarketPage = () => {
  return (
    <PageTemplate>
      <MarketListContainer/>
      <MarketDetailContainer/>
      <MarketDeleteContainer/>
    </PageTemplate>
  );
};

export default MarketPage;