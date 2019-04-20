import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

//创建redux存储器
const store = createStore(rootReducer,
    //compose内部是store enhancers，将redux store与外部插件相连
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        //attachAuthIsReady: true 用于规定用户登陆状态下，每次刷新页面都直接到页面内
        //useFirestoreForProfile: true,userProfile:'users'这两个用来将firestore中与firebase的id相同的item导入firebase的profile中
        reactReduxFirebase(fbConfig, { useFirestoreForProfile: true,userProfile:'users',attachAuthIsReady: true })
    )
);

//firebaseAuthIsReady 用于规定用户登陆状态下，每次刷新页面都直接到页面内
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})

