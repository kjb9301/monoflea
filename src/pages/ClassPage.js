import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ClassListContainer from 'containers/class/ClassListContainer';


const ClassPage = () => {
  return (
    <PageTemplate>
      <ClassListContainer/>
    </PageTemplate>
  );
};

export default ClassPage;