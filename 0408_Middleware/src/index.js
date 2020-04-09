import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// 미들웨어 : 리듀서 액션 전달 문지기 역할
import ReduxPromis from 'redux-promise';
// redux-promise 로 ajax 처리함

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromis)(createStore);
// 미들웨어 추가 ReduxPromise 해야 redux 완벽하게 돌아가는구먼??

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
