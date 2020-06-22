import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';

import { Provider } from "react-redux";

import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

//
// createStoreWithMiddleware(Reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__()

//리액트 컴포넌트에서 스토어를 사용할 수 있도록 Provider 로 감싸. 이 컴포넌트를 사용할 때는 store를 props로 전달.

ReactDOM.render(//리덕스 연결
  <Provider store={createStoreWithMiddleware(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
