import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  MainPage, 
  AboutPage, 
  BoardPage, 
  SellerPage, 
  MarketPage, 
  ClassPage, 
  BoardDetailPage, 
  BoardPostPage,
  BoardListPage,
  MarketDetailPage
} from 'pages';
import Base from 'containers/common/Base';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route exact path="/boards" component={BoardListPage}/>
        <Route exact path="/boards/notice" component={BoardPage}/>
        <Route path="/boards/notice/post" component={BoardPostPage}/>
        <Route path="/boards/notice/:id" component={BoardDetailPage}/>
        <Route exact path="/markets" component={MarketPage}/>
        <Route path="/markets/:id" component={MarketDetailPage}/>
        <Route exact path="/classes" component={ClassPage}/>
        <Route exact path="/sellers" component={SellerPage}/>
      </Switch>
      <Base/>
    </div>
  );
};

export default App;