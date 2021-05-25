import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import './index.css';
import MemoIndex from './components/memoIndex';
import MemoNew from './components/memoNew';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MemoIndex} />
        <Route path="/new" component={MemoNew} />
        {/* <Route path="/" component={MemoIndex} />
        <Route path="/" component={MemoIndex} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
