import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { Provider } from 'react-redux';

const Root = () => {
  return (
    // <Provider store={}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    // </Provider>
  );
};

export default Root;