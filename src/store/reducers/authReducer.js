import { stat } from "fs";

const initState={
    // someotherrandomdata:'',
    authError:null
}

const authReducer=(state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
        console.log('login error')
        return{
            //注意，这个state与rootReducer中的auth绑定
            ...state,
            authError:action.err.message
        }
        case 'LOGIN_SUCCESS':
        console.log('login success')
        return{
            ...state,
            authError:null
        }
        case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        return state;
        case 'SIGNUP_SUCCESS':
        console.log('signup success')
        return{
            ...state,
            authError:null
        }
        case 'SIGNUP_ERROR':
        console.log('signup error')
        return{
            ...state,
            authError:action.err.message
        }
        default:
        return state;
    }
}

export default authReducer