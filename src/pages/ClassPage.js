import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ClassWrapperContainer from 'containers/class/ClassWrapperContainer';
// import ClassDetailContainer from 'containers/class/ClassDetailContainer';

const ClassPage = () => {
  return (
    <PageTemplate>
      <ClassWrapperContainer/>
      {/* <ClassDetailContainer/> */}
    </PageTemplate>
  );
};

export default ClassPage;