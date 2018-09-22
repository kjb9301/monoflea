import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MarketRegWrapperContainer from 'containers/market/MarketRegWrapperContainer';
import MarketDetailContainer from 'containers/market/MarketDetailContainer';
import MarketDeleteContainer from 'containers/market/MarketDeleteContainer';
import ApplyListContainer from 'containers/market/ApplyListContainer';

const MarketRegListPage = () => {
  return (
    <PageTemplate>
      <MarketRegWrapperContainer/>
      <MarketDetailContainer/>
      <MarketDeleteContainer/>
      <ApplyListContainer/>
    </PageTemplate>
  );
};

export default MarketRegListPage;