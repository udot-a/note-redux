import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from "./App";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./redux/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

