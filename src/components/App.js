import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, AboutPage, BoardPage, SellerPage, MarketPage, ClassPage, BoardDetailPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route exact path="/notices" component={BoardPage}/>
        <Route path="/notices/:id" component={BoardDetailPage}/>
        <Route exact path="/markets" component={MarketPage}/>
        <Route exact path="/classes" component={ClassPage}/>
        <Route exact path="/sellers" component={SellerPage}/>
      </Switch>
    </div>
  );
};

export default App;