import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import NoticeDetailContainer from 'containers/board/Notice/NoticeDetailContainer';

const BoardDetailPage = ({ match }) => {
  const { id } = match.params;
  return (
    <PageTemplate>
      <NoticeDetailContainer id={id}/>
    </PageTemplate>
  );
};

export default BoardDetailPage;