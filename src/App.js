import React from 'react';
import { GlobalStyle } from './style.js';
import { IconGlobalStyle } from './common/iconfont/iconfont.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './common/header/index.js';
import Home from './main-pages/home/index.js';
import Read from './main-pages/read/index.js';
import Login from './main-pages/login/index.js';
// import Footer from './common/footer/index.js';
import store from './store/index.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <IconGlobalStyle />
        {/* <Header /> */}
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} ></Route>
            <Route path='/read/:id' exact component={Read}></Route>
            <Route path='/login' exact component={Login}></Route>
          </Switch>
        </BrowserRouter>
        {/* <Footer /> */}
      </Provider>
    </div>
  );
}

export default App;
