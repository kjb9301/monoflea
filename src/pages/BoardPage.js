import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import NoticeListContainer from 'containers/board/Notice/NoticeListContainer';

const BoardPage = () => {
  return (
    <PageTemplate>
      <NoticeListContainer/>
    </PageTemplate>
  );
};

export default BoardPage;