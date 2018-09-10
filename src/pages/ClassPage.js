import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ClassWrapper from 'components/class/ClassWrapper';
import ClassDetailContainer from 'containers/class/ClassDetailContainer';

const ClassPage = () => {
  return (
    <PageTemplate>
      <ClassWrapper/>
      <ClassDetailContainer/>
    </PageTemplate>
  );
};

export default ClassPage;