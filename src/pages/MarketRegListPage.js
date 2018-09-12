import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MarketRegListContainer from 'containers/market/MarketRegListContainer';
import MarketDetailContainer from 'containers/market/MarketDetailContainer';
import MarketDeleteContainer from 'containers/market/MarketDeleteContainer';

const MarketRegListPage = () => {
  return (
    <PageTemplate>
      <MarketRegListContainer/>
      <MarketDetailContainer/>
      <MarketDeleteContainer/>
    </PageTemplate>
  );
};

export default MarketRegListPage;