import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import HomeContainer from './home/home-container';

//let store = createStore(todoApp);

render(
  // <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={HomeContainer}>

      </Route>
    </Router>,
  // </Provider>,
  document.getElementById('app')
);
