import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, AboutPage, BoardPage, SellerPage, MarketPage, ClassPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/boards" component={BoardPage}/>
        <Route path="/markets" component={MarketPage}/>
        <Route path="/classes" component={ClassPage}/>
        <Route path="/sellers" component={SellerPage}/>
      </Switch>
    </div>
  );
};

export default App;