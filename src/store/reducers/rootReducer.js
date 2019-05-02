import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import authReducer from './authReducer'
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    map:mapReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer

});

export default rootReducer