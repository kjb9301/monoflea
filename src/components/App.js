import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  MainPage, 
  AboutPage, 
  BoardPage, 
  SellerPage, 
  MarketPage, 
  ClassPage,
  ClassPostPage,
  BoardDetailPage, 
  BoardPostPage,
  BoardListPage,
  MarketRegListPage,
  MarketRegPage
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
        <Route path="/markets/recruitment" component={MarketRegListPage}/>
        <Route path="/markets/registration" component={MarketRegPage}/>
        <Route exact path="/classes" component={ClassPage}/>
        <Route path="/classes/post" component={ClassPostPage}/>
        <Route exact path="/sellers" component={SellerPage}/>
      </Switch>
      <Base/>
    </div>
  );
};

export default App;