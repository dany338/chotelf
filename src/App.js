import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import ConfirmPopup from './components/confirmPopup';
import Loading from './components/loading';
import Alert from './components/alert';
import UrlsComponent from './urls';

class Container extends Component {
  render() {
    return (
      <>
        <UrlsComponent />
        <ConfirmPopup />
        <Loading />
        <Alert />
      </>
    );
  }
}

export default hot(Container);
