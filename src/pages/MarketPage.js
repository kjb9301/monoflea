import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MarketDetailContainer from 'containers/market/MarketDetailContainer';
import MarketDeleteContainer from 'containers/market/MarketDeleteContainer';
import MarketWrapperContainer from 'containers/market/MarketWrapperContainer';

const MarketPage = () => {
  return (
    <PageTemplate>
      <MarketWrapperContainer/>
      <MarketDetailContainer/>
      <MarketDeleteContainer/>
    </PageTemplate>
  );
};

export default MarketPage;