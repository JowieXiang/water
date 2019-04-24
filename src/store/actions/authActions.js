//credentials在call signIn功能是传入函数
//signIn其实叫做action creator，而不是action
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        //initialize firebase object
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' });
            })
    }
}

export const signUp = (newUser) => {
    
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        //首先在firebase的用户系统中创建一个新用户
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            //在firestore内创建一个新的doc，其id与firebase中的用户id相同
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                profile: newUser.profile
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}