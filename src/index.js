import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux相关的插件
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer'

//创建redux存储器
const store = createStore(rootReducer);

//用provider包住App，为App提供redux服务
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
