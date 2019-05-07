import React, { Component,Fragment } from 'react';
import {GlobalStyle} from './style.js';
import Header from './common/header/index';
import {IconGlobalStyle} from './statics/iconfont/iconfont'
import store from './store/index';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login/index'
import Write from './pages/write/index'
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Fragment>
          <GlobalStyle/>
          <IconGlobalStyle/>    
          <BrowserRouter>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          </BrowserRouter>
      </Fragment>
      </Provider>
    );
  }
}

export default App;
