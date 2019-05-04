import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import authReducer from './authReducer'
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user:userReducer,//这里用于连接userWebsites集合中的数据
    firestore: firestoreReducer,
    firebase: firebaseReducer

});

export default rootReducer