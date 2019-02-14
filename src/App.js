import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
import Posts from './components/Post'
import AddPost from './components/Postform.js';

import store from './store';


// const Store = createStore(() => [],{}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <AddPost/>
          <Posts/>
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
