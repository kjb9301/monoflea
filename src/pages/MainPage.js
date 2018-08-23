import React, { Component } from 'react';
import MainWrapper from 'components/main/MainWrapper';
import PageTemplate from 'components/common/PageTemplate';

class MainPage extends Component {
  render() {
    return (
      <PageTemplate>
        <MainWrapper />
      </PageTemplate>      
    );
  }
}

export default MainPage;