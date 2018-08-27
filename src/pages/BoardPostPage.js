import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import NoticePostContainer from 'containers/board/Notice/NoticePostContainer';

const BoardPostPage = () => {
  return (
    <PageTemplate>
      <NoticePostContainer/>
    </PageTemplate>
  );
};

export default BoardPostPage;